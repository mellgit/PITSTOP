# Generated by Django 3.1.1 on 2020-11-26 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0013_auto_20201126_1741'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='name',
            field=models.CharField(default='name', max_length=32),
            preserve_default=False,
        ),
    ]
