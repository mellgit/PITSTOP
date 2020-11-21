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


def print_data_excel_file(blob_file, cursor, connect):
    excel_file = pandas.ExcelFile(blob_file)

    for sheet_name in excel_file.sheet_names:
        print(sheet_name)

        sheet = excel_file.parse(sheet_name).to_dict()

        # try:
        for index_row in range(len(sheet["Бренд"])):
            id_product = cursor.execute("SELECT MAX(id) FROM home_products").fetchall()[0][0]

            if id_product is None:
                id_product = 0
            else:
                id_product += 1

            brand = str(sheet["Бренд"][index_row])
            normalized_manufacturer_code = str(sheet["Нормированный код производителя"][index_row])
            name = str(sheet["Наименование"][index_row])
            ARMTEC_code = str(sheet["Код АРМТЕК"][index_row])
            manufacturer_code = str(sheet["Код производителя"][index_row])
            amount = str(sheet["Количество"][index_row])
            price_with_dot = str(sheet["Цена с точкой"][index_row])

            # cursor.execute("INSERT INTO 'home_products' VALUES ("
            #                + str(id_product) + ", '" + brand
            #                + "', '" + normalized_manufacturer_code
            #                + "', '" + name
            #                + "', '" + ARMTEC_code
            #                + "', '" + manufacturer_code
            #                + "', " + amount
            #                + ", " + price_with_dot
            #                + ")")

            cursor.execute("""INSERT INTO 'home_products' VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
                           (str(id_product), brand, normalized_manufacturer_code, name, ARMTEC_code,
                            manufacturer_code, amount, float(price_with_dot)))

            print(id_product)
            print(brand)

            connect.commit()
        # except Exception:
        #     pass


async def read_email(config, cursor, connect):
    mail = imaplib.IMAP4_SSL('imap.gmail.com')
    mail.login(config['login'], config['password'])

    NAME_SUBJECT = config['name_subject']
    DELAY = config['delay']

    mail.list()
    mail.select('inbox')

    result, data = mail.search(None, "UNSEEN")

    ids = data[0]
    id_list = ids.split()

    for id_message in id_list:
        email_message = get_email_message(id_message, mail)

        message_subject = get_subject(email_message)

        if message_subject != NAME_SUBJECT:
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

                print_data_excel_file(unzip_blob_excel, cursor, connect)

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
    conn = sqlite3.connect(db_path)
    d_cursor = conn.cursor()

    asyncio.run(main(d_cursor, conn))
