from django.db import models


# Create your models here.

# создание модели api в бд, после чего мигрируем модель в бд

class Client(models.Model):
    login = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=50)

    name = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=150)
    isSMSsendingincluded = models.BooleanField()
    office = models.IntegerField()
    profile = models.IntegerField()
    discount = models.IntegerField()
    id_garage = models.IntegerField(unique=True, null=False)

    def __str__(self):
        return f"{self.login}"

"""
    ./manage.py makemigrations - занесение в бд
    ./manage.py migrate - сохранение в бд
"""

"""
url: дописать
тип запроса: POST
При добавление клиента пользователь отправляет json на Screenshot_269, где
name - (string) имя клиента
city - (string) наименование города клиента
email – (string) электронный адрес клиента
phone – (string) номер телефона клиента
isSMSsendingincluded – (boolean) позволяет включить отправку сообщения по ранее введённому номеру
office – (number) id офиса
profile – (number) id профиля
car – объект машины содержащий (--> сделан для отступа):
--> это отмена парни !!!! name – (string) название автомобиля
-->typeCode – (string) строка "VIN" или "Frame"
-->code – (string) VIN-код или Номером кузова (Frame)
-->year – (string) год выпуска автомобиля
-->mark – (number) марка тут отмента
-->model – (number) модель
-->modification – (number) модификация
-->licensePlate – (string) индивидуальный регистрационный знак (номер) транспортного средства
-->mileage – (number) пробег, расстояние, пройденное каким-н. транспортным средством
-->description – (string) описание

"""


class Product(models.Model):
    id = models.IntegerField(primary_key=True, unique=True, auto_created=True, null=False, default=0)
    brand = models.CharField(max_length=20)
    normalized_manufacturer_code = models.CharField(max_length=20)
    name = models.CharField(max_length=64)
    ARMTEC_code = models.CharField(max_length=20)
    amount = models.CharField(max_length=20)
    price_with_dot = models.FloatField(max_length=20)


class Garage(models.Model):
    id_garage = models.IntegerField()
    id_car = models.IntegerField()


class Car(models.Model):
    brand = models.CharField(max_length=64)
    model = models.CharField(max_length=64)
    yearOfIssue = models.CharField(max_length=4)
    modification = models.CharField(max_length=64)
    mileage = models.IntegerField()
    licensePlate = models.CharField(max_length=64)
    typeCode = models.CharField(max_length=10)
    code = models.CharField(max_length=32)
    name = models.CharField(max_length=32)


class Order(models.Model):
    img = models.ImageField(upload_to="static/product_img/", blank=True)
    name = models.CharField(max_length=20)
    status = models.CharField(max_length=32)


class CarOrder(models.Model):
    id_car = models.IntegerField()
    id_order = models.IntegerField()


# id
# адрес
# имя
# телефон
# email (почта для приёма)
# contancts
# заметка

class Provider(models.Model):
    address = models.CharField(max_length=64)
    name = models.CharField(max_length=32)
    phone = models.CharField(max_length=12)
    email = models.CharField(max_length=64)
    email_contacts = models.CharField(max_length=64)
    note = models.CharField(max_length=300)
    has_error = models.BooleanField()


class ProviderProduct(models.Model):
    id_provide = models.IntegerField()
    id_product = models.IntegerField()


class Config(models.Model):
    name = models.CharField(max_length=32)

