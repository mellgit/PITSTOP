# Generated by Django 3.1.1 on 2020-11-27 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0020_auto_20201127_0707'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ignoreconfig',
            name='brand',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='ignoreconfig',
            name='vendor_code',
            field=models.CharField(max_length=20, null=True),
        ),
    ]