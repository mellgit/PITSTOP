# Generated by Django 3.1.1 on 2020-11-28 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0025_auto_20201128_1536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.CharField(default=1, max_length=64),
            preserve_default=False,
        ),
    ]
