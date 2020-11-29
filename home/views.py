from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from home.models import Client, Garage, Car, CarOrder, Order, IgnoreConfig, Provider, Product
from json import loads
import json

# from django.views.decorators.csrf import csrf_exempt


# вывод hello world на сайте
# @csrf_exempt
def auth(request):

    if request.method == 'POST':
        print(request.body)
        data = loads(request.body)
        print(data['login'])
        print(data['password'])
        data_filter = Client.objects.filter(login=data['login'])

        if not data_filter:
            return HttpResponse("False")
            
        print(data_filter.values_list()[0])

        if data['password'] == data_filter.values_list()[0][2]:
            return HttpResponse("Ok")

        else:
            return HttpResponse("False")

        print(dir(data_filter))
        return HttpResponse('OK')

        print(data_filter)
        
        # data_save = Client(login='admin', password='admin', isSMSsendingincluded=False, office=0, profile=0)
        # data_save.save()
    
    return HttpResponse('<h1>wrong user</h1>')

# fullName - (string) ФИО
# city - (string) Город
# office - (string) Офис
# phone - (string) Номер телефона
# email - (string) Email
# discount - (string) Скидка
# idProfile - (string) Индивидуальный номер профиля


def get_user_date(request):
    id_client = loads(request.body)['id']

    client = Client.objects.get(id=id_client)

    return HttpResponse(json.dumps({
        'fullName': client.name,
        'city': client.city,
        'office': client.office,
        'phone': client.phone,
        'email': client.email,
        'discount': client.discount,
        'idProfile': client.profile
    }))

# id - (number)
# name - (string) название машины
# brand - (string) марка
# model - (string) модель
# yearOfIssue - (string) год выпуска
# modification - (string) модификация
# mileage - (number) пробег
# licensePlate - (string) госномер
# typeCode - (string) VIN или frame
# code - (string) код VIN или frame
# orders - (array) массив объектов заказов, со следующими полями:
# -->id - (number)
# -->img - (string) ссылка на картинку
# -->name - (string) название заказа
# -->status - (string) статус


def get_garage(request):
    id_client = loads(request.body)['id']

    id_garage = Client.objects.get(id=id_client).id_garage

    result = []

    for garage in Garage.objects.filter(id=id_garage):
        car = Car.objects.get(id=garage.id_car)

        res_orders = []

        for car_order in CarOrder.objects.filter(id_car=garage.id_car):
            order = Order.objects.filter(id=car_order.id)

            res_orders.append({
                'id': order.id,
                'name': order.name,
                'status': order.status,
                'img': order.img
            })

        result.append({
            'name': car.name,
            'brand': car.brand,
            'model': car.model,
            'yearOfIssue': car.yearOfIssue,
            'modification': car.modification,
            'mileage': car.mileage,
            'licensePlate': car.licensePlate,
            'typeCode': car.typeCode,
            'code': car.code,
            'orders': res_orders
        })

    return HttpResponse(json.dumps(result))


# name -(string) название иашины
# brand - (string) марка
# model - (string) модель
# yearOfIssue - (string) год выпуска
# modification - (string) модификация
# mileage - (number) пробег
# licensePlate - (string) госномер
# typeCode - (string) VIN или frame
# code - (string) код VIN или frame
def add_car(request):
    data = loads(request.body)

    car = Car()
    save_car(data, car)

    return HttpResponse(json.dumps({
        'id': car.id
    }))


# id - (number)
def delete_car(request):
    car_id = loads(request.body)['id']

    try:
        car = Car.objects.get(id=car_id)
        car.delete()
    except ObjectDoesNotExist:
        return HttpResponse('Error')

    return HttpResponse('Ok')


# id - (number)
# name -(string) название иашины
# brand - (string) марка
# model - (string) модель
# yearOfIssue - (string) год выпуска
# modification - (string) модификация
# mileage - (number) пробег
# licensePlate - (string) госномер
# typeCode - (string) VIN или frame
# code - (string) код VIN или frame
def change_car(request):
    data = loads(request.body)

    try:
        car = Car.objects.get(id=data['id'])

        save_car(data, car)
    except ObjectDoesNotExist:
        return HttpResponse('Error')

    return HttpResponse('Ok')


def save_car(data, car):
    car.name = data['name']
    car.brand = data['brand']
    car.model = data['model']
    car.yearOfIssue = data['yearOfIssue']
    car.modification = data['modification']
    car.mileage = data['mileage']
    car.licensePlate = data['licensePlate']
    car.typeCode = data['typeCode']
    car.code = data['code']


def add_ignore_config(request):
    data = loads(request.body)

    try:
        ignore = IgnoreConfig()

        ignore.id_provider = data['id']
        ignore.brand = data['brand']
        ignore.vendor_code = data['vendor_code']

        ignore.save()
    except ObjectDoesNotExist:
        return HttpResponse("Error")

    return HttpResponse("Ok")


def delete_ignore(request):
    id_ign = loads(request.body)['id']

    try:
        IgnoreConfig.objects.get(id=id_ign).delete()
    except ObjectDoesNotExist:
        return HttpResponse("Error")

    return HttpResponse("Ok")


def add_ignore(request):
    data = loads(request.body)

    ignore = IgnoreConfig()

    ignore.id_provider = data['id_provider']
    ignore.brand = data['brand']
    ignore.vendor_code = data['vendor_code']

    ignore.save()

    return HttpResponse(json.dumps(ignore.id))


# phone
# email
# note
# email_contact
# address
# mail_for_reception
# name_file
# number_brand
# number_availability
# number_price
# number_description
# number_vendor_code

def save_form(request):
    data = loads(request.body)

    try:
        provider = Provider.objects.get(id=data['id'])

        provider.phone = data['phone']
        provider.email = data['email']
        provider.note = data['note']
        provider.email_contacts = data['email_contacts']
        provider.address = data['address']
        provider.mail_for_reception = data['mail_for_reception']
        provider.name_file = data['name_file']
        provider.number_brand = data['number_brand']
        provider.number_availability = data['number_availability']
        provider.number_price = data['number_price']
        provider.number_description = data['number_description']
        provider.number_vendor_code = data['number_vendor_code']

        provider.save()

    except ObjectDoesNotExist:
        return HttpResponse("Error")

    return HttpResponse("Ok")


def delete_all_products(request):
    Product.objects.all().delete()

    return HttpResponse("Ok")
