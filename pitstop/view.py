from django.shortcuts import render


def home(request):
    return render(request, 'index.html')


def admin_panel_table(request):
    return render(request, 'admin/main_table.html')


def admin_panel_brand(request):
    return render(request, 'admin/main_brands.html')