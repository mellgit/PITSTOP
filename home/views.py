from django.shortcuts import render
from django.http import HttpResponse
from home.models import Client
from json import loads

# from django.views.decorators.csrf import csrf_exempt


# вывод hello world на сайте
# @csrf_exempt
def api(request):

    if request.method == 'POST':
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
