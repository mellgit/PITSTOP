# Generated by Django 3.1.1 on 2020-11-26 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0018_remove_products_manufacturer_code'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.IntegerField(auto_created=True, default=0, primary_key=True, serialize=False, unique=True)),
                ('brand', models.CharField(max_length=20)),
                ('normalized_manufacturer_code', models.CharField(max_length=20)),
                ('name', models.CharField(max_length=64)),
                ('ARMTEC_code', models.CharField(max_length=20)),
                ('amount', models.CharField(max_length=20)),
                ('price_with_dot', models.FloatField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name='Products',
        ),
    ]