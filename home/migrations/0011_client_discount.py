# Generated by Django 3.1.1 on 2020-11-26 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0010_auto_20201121_2348'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='discount',
            field=models.IntegerField(default=25),
            preserve_default=False,
        ),
    ]