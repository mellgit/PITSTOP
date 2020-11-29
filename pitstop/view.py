from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from home.models import IgnoreConfig, Provider, Product
from django.db.models import Q


def home(request):
    return render(request, 'index.html')


def admin_panel_table(request, id_provider):
    provider = Provider.objects.get(id=id_provider)

    data = {
        'provider': get_provider_data(provider),
        'table': get_table(id_provider),
        'arr_providers': get_arr_provider()
    }

    return render(request, 'admin/main_table.html', data)


def admin_panel_brand(request, id_provider):
    provider = Provider.objects.get(id=id_provider)

    brands = []

    max = 10000
    cur = 0

    for product in Product.objects.filter(id_provide=id_provider):

        brands = add_brand_to_brands(brands, product.brand)
        cur += 1

        if cur >= max:
            break

    data = {
        'provider': get_provider_data(provider),
        'brands': brands,
        'arr_providers': get_arr_provider()
    }

    return render(request, 'admin/main_brands.html', data)


# id
# адрес
# имя
# телефон
# email (почта для приёма)
# contancts
# заметка
def get_provider_data(provider):
    return {
        'id': provider.id,
        'address': provider.address,
        'name': provider.name,
        'phone': provider.phone,
        'email': provider.email,
        'email_contacts': provider.email_contacts,
        'note': provider.note,
        'mail_for_reception': provider.mail_for_reception,
        'name_file': provider.name_file,
        'number_brand': provider.number_brand,
        'number_availability': provider.number_availability,
        'number_price': provider.number_price,
        'number_description': provider.number_description,
        'number_vendor_code': provider.number_vendor_code,
        'ignore': get_ignore(provider.id)
    }


def get_ignore(id_provider):
    ignores = []

    for ign in IgnoreConfig.objects.filter(id_provider=id_provider):
        ignores.append({
            'id': ign.id,
            'brand': ign.brand,
            'vendor_code': ign.vendor_code
        })

    return ignores


def add_brand_to_brands(arr_brands, brand):
    for i in range(len(arr_brands)):
        if arr_brands[i]['brand'] == brand:
            arr_brands[i]['count'] += 1
            return arr_brands

    arr_brands.append({
        'brand': brand,
        'count': 1
    })
    return arr_brands


def get_arr_provider():
    arr_providers = []

    for p in Provider.objects.all():
        arr_providers.append({
                'id': p.id,
                'name': p.name,
                'has_error': p.has_error
        })

    return arr_providers


# def change_ig

def error_none(field):
    if field is None:
        return "Ошибка"

    return field


def get_table(id_provider):
    res = []

    #
    # brand = models.CharField(max_length=20, null=True)
    #     price = models.FloatField(max_length=20, null=True)
    #     vendor_code = models.CharField(max_length=20, null=True)
    #     description = models.CharField(max_length=64, null=True)
    #     availability = models.CharField(max_length=20, null=True)

    products = Product.objects.filter(id_provide=id_provider)

    for product in products.filter(Q(brand=None) | Q(price=None) | Q(vendor_code=None) | Q(description=None) |
                                   Q(availability=None) | Q(number_string=None)):
        res.append({
            "brand": error_none(product.brand),
            "price": error_none(product.price),
            "vendor_code": error_none(product.vendor_code),
            "description": error_none(product.description),
            "availability": error_none(product.availability),
            "number_string": error_none(product.number_string)
        })

    return res
