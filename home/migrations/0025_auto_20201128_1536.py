# Generated by Django 3.1.1 on 2020-11-28 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0024_product_number_string'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
