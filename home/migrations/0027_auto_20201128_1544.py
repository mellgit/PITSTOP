# Generated by Django 3.1.1 on 2020-11-28 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0026_auto_20201128_1543'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.CharField(max_length=64, null=True),
        ),
    ]