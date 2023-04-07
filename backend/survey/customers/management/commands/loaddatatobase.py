import csv
import os

from django.conf import settings
from django.core.management.base import BaseCommand

from customers.models import Well, Customer
from contractors.models import Contractor
from users.models import User

FILES_DIR = os.path.join(settings.BASE_DIR, 'data')

class Command(BaseCommand):
    """Загрузка скважин в базу."""

    def add_arguments(self, parser):
        parser.add_argument(
            'filename',
            default='wells.csv',
            nargs='?',
            type=str
        )

    def handle(self, *args, **options):
        with open(os.path.join(FILES_DIR, options['filename']), 'r',
                  encoding='cp1251') as file:
            data = csv.reader(file)
            for row in data:
                new_row = row[0].split(";")
                new_row[0] = int(new_row[0])
                new_row[1] = int(new_row[1])
                new_row[2] = int(new_row[2])
                author, customer, contractor, field, rig, well_number, status = new_row
                Well.objects.get_or_create(
                    author=User.objects.get(id=author),
                    customer=Customer.objects.get(id=customer),
                    contractor=Contractor.objects.get(id=contractor),
                    field=field,
                    rig=rig,
                    well_number=well_number,
                    status=status
                )