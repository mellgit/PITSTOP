# Generated by Django 3.1.1 on 2020-11-28 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0023_auto_20201128_1452'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='number_string',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]