# Generated by Django 3.2.16 on 2023-01-24 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contractors', '0003_alter_contractor_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contractor',
            name='phone',
            field=models.CharField(max_length=15, unique=True, verbose_name='Телефон'),
        ),
    ]
