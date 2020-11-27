import os
import sqlite3
import imaplib
import email
from email.header import decode_header, make_header
import zipfile
import pandas
from io import BytesIO
import asyncio


def get_subject(email_message):
    message_subject = email_message['Subject']
    return make_header(decode_header(message_subject))


def get_email_message(id, mail):
    result, data = mail.fetch(id, "(RFC822)")
    raw_email = data[0][1]

    return email.message_from_string(raw_email.decode('utf-8'))


# должен содержать один файл
def decode_zip_file(zip_file):
    filebytes = BytesIO(zip_file)
    myzipfile = zipfile.ZipFile(filebytes)
    foofile = myzipfile.open(myzipfile.namelist()[0])
    return foofile.read()


def has_error(field):
    if field == "":
        return "Ошибка"

    return field


def get_id_product(cursor, vendor_code):
    return cursor.execute("SELECT * FROM home_product WHERE vendor_code=?", (vendor_code, )).fetchall()


def add_provide_product(connect, cursor, id_provide, id_product):
    id_provide_product = cursor.execute("SELECT MAX(id) FROM home_providerproduct").fetchall()[0][0]

    if id_provide_product is None:
        id_product = 0
    else:
        id_provide_product += 1

    print("add " + str(id_provide_product) + " " + str(id_provide) + " " + str(id_product))

    cursor.execute("""INSERT INTO 'home_providerproduct' VALUES (?, ?, ?)""",
                   (str(id_provide_product), str(id_provide), str(id_product)))

    connect.commit()


def print_data_excel_file(blob_file, cursor, connect, provider):
    index_availability = provider[10] - 1
    index_brand = provider[11] - 1
    index_description = provider[12] - 1
    index_price = provider[13] - 1
    index_vendor_code = provider[14] - 1

    excel_file = pandas.ExcelFile(blob_file)

    for sheet_name in excel_file.sheet_names:
        print(sheet_name)

        sheet = excel_file.parse(sheet_name).to_dict()

        keys = list(sheet.keys())

        a = keys[index_availability]

        b = sheet[a]

        print(len(sheet[keys[index_availability]]))

        # try:
        for index_row in range(len(sheet[keys[index_availability]])):
            if index_row % 1000 == 0:
                print(index_row)

            availability = has_error(str(sheet[keys[index_availability]][index_row]))
            brand = has_error(str(sheet[keys[index_brand]][index_row]))
            description = has_error(str(sheet[keys[index_description]][index_row]))
            price = has_error(str(sheet[keys[index_price]][index_row]))
            vendor_code = has_error(str(sheet[keys[index_vendor_code]][index_row]))

            list_id_product = get_id_product(cursor, vendor_code)

            if len(list_id_product) == 0:
                id_product = cursor.execute("SELECT MAX(id) FROM home_product").fetchall()[0][0]

                if id_product is None:
                    id_product = 0
                else:
                    id_product += 1

                # cursor.execute("UPDATE home_produ WHERE vendor_code=?", (vendor_code,)).fetchall()
                cursor.execute("""INSERT INTO 'home_product' VALUES (?, ?, ?, ?, ?, ?)""",
                               (str(id_product), brand, availability, description, price, vendor_code))

                connect.commit()

            else:
                id_product = list_id_product[0][0]
                #
                # add_provide_product(connect, cursor, provider[0], id_product)

                # print(brand)

                cursor.execute("""UPDATE 'home_product' SET
                            availability = ?, description = ?, price = ?
                            WHERE id = ?""",
                               (availability, description, price, str(id_product)))

                connect.commit()
        # except Exception:
        #     pass


def get_email_from(email_message):
    return email.utils.parseaddr(email_message['From'])[1]


def get_provider(email_from, cursor):
    return cursor.execute("SELECT * FROM home_provider WHERE mail_for_reception=?", (email_from, )).fetchall()


async def read_email(config, cursor, connect):
    mail = imaplib.IMAP4_SSL('imap.gmail.com')
    mail.login(config['login'], config['password'])

    NAME_SUBJECT = config['name_subject']
    DELAY = config['delay']

    mail.list()
    mail.select('inbox')

    result, data = mail.search(None, "all")
    # result, data = mail.search(None, "UNSEEN")

    ids = data[0]
    id_list = ids.split()

    for id_message in id_list:
        email_message = get_email_message(id_message, mail)

        provider = get_provider(get_email_from(email_message), cursor)

        if len(provider) == 0:
            continue

        for part in email_message.walk():
            if part.get_content_maintype() == 'multipart':
                continue
            if part.get('Content-Disposition') is None:
                continue
            fileName = part.get_filename()
            if bool(fileName):
                # достаём наши данные в виде zip файла (надо исправить и сделать условие)
                zip_file = part.get_payload(decode=True)

                unzip_blob_excel = decode_zip_file(zip_file)

                print_data_excel_file(unzip_blob_excel, cursor, connect, provider[0])

    await asyncio.sleep(DELAY)


async def main(cursor, connect):
    config = {
        'delay': 900,
        'login': 'pitstop.work2@gmail.com',
        'password': '1234qwer@',
        'name_subject': "Данные"
    }

    while True:
        await read_email(config, cursor, connect)


if __name__ == '__main__':
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(BASE_DIR, "db.sqlite3")
    conn = sqlite3.connect(db_path, isolation_level=None)
    conn.execute('PRAGMA synchronous=OFF')
    d_cursor = conn.cursor()

    asyncio.run(main(d_cursor, conn))
