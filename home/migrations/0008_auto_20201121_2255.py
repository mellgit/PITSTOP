# Generated by Django 3.1.1 on 2020-11-21 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_auto_20201121_2253'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='id',
            field=models.IntegerField(auto_created=True, primary_key=True, serialize=False, unique=True),
        ),
    ]