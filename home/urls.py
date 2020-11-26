from django.urls import path

#импортирование всех ф-й из модуля views
from .views import * 

"""
Что делает django
    1 - отбрасывает домен
    2 - обращается по ссылке home
    3 - в home смотрит на urls.py
    4 - здесь список urlpatterns
    5 - если после ссылки home будет еще какая-то ссылка
    то она записывается в urlpatterns

    *пустая строка означает ссылку http://127.0.0.1:8000/home
    если в home мы создаем какую то ссылку то выглядить будет так
    http://127.0.0.1:8000/home/some-title
    some-title заноситься в список urlpatterns
"""
urlpatterns = [
    path('auth/', auth, name='auth'),
    path('get_user_date/', get_user_date),
    path('get_garage/', get_garage),
    path('add_car/', add_car),
    path('delete_car/', delete_car),
    path('change_car/', change_car)
]