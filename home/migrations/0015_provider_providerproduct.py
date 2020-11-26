# Generated by Django 3.1.1 on 2020-11-26 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0014_car_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Provider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=64)),
                ('name', models.CharField(max_length=32)),
                ('phone', models.CharField(max_length=12)),
                ('email', models.CharField(max_length=64)),
                ('email_contacts', models.CharField(max_length=64)),
                ('note', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='ProviderProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_provide', models.IntegerField()),
                ('id_product', models.IntegerField()),
            ],
        ),
    ]