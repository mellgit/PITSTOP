# Generated by Django 3.1.1 on 2020-11-21 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_auto_20201121_2255'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='id',
            field=models.IntegerField(auto_created=True, default=0, primary_key=True, serialize=False, unique=True),
        ),
    ]
