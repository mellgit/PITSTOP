from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from home.models import Client, Garage, Car, CarOrder, Order, Provider, ProviderProduct, Product
import json


def home(request):
    return render(request, 'index.html')


def admin_panel_table(request):
    return render(request, 'admin/main_table.html')


def admin_panel_brand(request, id_provider):
    provider = Provider.objects.get(id=id_provider)

    brands = []

    for provider_product in ProviderProduct.objects.filter(id_provide=id_provider):
        product = Product.objects.get(id=provider_product.id_product)

        brands = add_brand_to_brands(brands, product.brand)

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
        'note': provider.note
    }


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
