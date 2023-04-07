# Generated by Django 4.1.5 on 2023-03-23 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0005_remove_well_unique_field_well_well_unique_field_well'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='well',
            name='unique_field_well',
        ),
        migrations.AddConstraint(
            model_name='well',
            constraint=models.UniqueConstraint(fields=('rig', 'well_number'), name='unique_rig_well'),
        ),
    ]