from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from home.models import Client, Garage, Car, CarOrder, Order, Provider, ProviderProduct
import json


def home(request):
    return render(request, 'index.html')


def admin_panel_table(request):
    return render(request, 'admin/main_table.html')


def admin_panel_brand(request, id_provider):
    provider = Provider.objects.get(id=id_provider)

    brands = []

    for provider_product in ProviderProduct.objects.filter(id_provide=id_provider):
        print()

    data = {
        'provider': get_provider_data(provider),
        'brands': brands
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
