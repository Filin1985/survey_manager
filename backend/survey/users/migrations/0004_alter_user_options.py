# Generated by Django 4.1.5 on 2023-02-02 10:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_user_firstname_user_lastname_alter_user_first_name_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'ordering': ['email'], 'verbose_name': 'Пользователь', 'verbose_name_plural': 'Пользователи'},
        ),
    ]
