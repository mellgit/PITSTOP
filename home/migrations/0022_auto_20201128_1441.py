# Generated by Django 3.1.1 on 2020-11-28 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0021_auto_20201127_0833'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ProviderProduct',
        ),
        migrations.AddField(
            model_name='product',
            name='id_provide',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
