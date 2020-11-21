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
    office = models.IntegerField(max_length=4)
    profile = models.IntegerField(max_length=10)
    
    def __str__(self):
        return f"{self.login}"

class Car(models.Model):
    typeCode = models.CharField(max_length=20)
    code = models.CharField(max_length=20)
    year = models.CharField(max_length=20)
    mark = models.CharField(max_length=20)
    model = models.IntegerField(max_length=20)
    modification = models.IntegerField(max_length=20)
    licensePlate = models.CharField(max_length=20)
    mileage = models.IntegerField(max_length=20)
    description = models.TextField(max_length=300)
    adding_client = models.ForeignKey(Client, on_delete=models.CASCADE)

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


class Products(models.Model):
    id = models.IntegerField(primary_key=True, unique=True, auto_created=True, null=False, default=0)
    brand = models.CharField(max_length=20)
    normalized_manufacturer_code = models.CharField(max_length=20)
    name = models.CharField(max_length=64)
    ARMTEC_code = models.CharField(max_length=20)
    manufacturer_code = models.CharField(max_length=20)
    amount = models.CharField(max_length=20)
    price_with_dot = models.FloatField(max_length=20)
