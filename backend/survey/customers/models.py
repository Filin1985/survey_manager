from colorfield.fields import ColorField
from django.db import models

from users.models import User
from contractors.models import Contractor

# Create your models here.
class Customer(models.Model):
    """Модель заказчиков."""
    name = models.CharField(
        max_length=50,
        unique=True,
        verbose_name='Название'
    )
    color = ColorField(
        unique=True,
        max_length=7,
        verbose_name='Цвет в HEX',
        blank=True,
        null=True,
        default='#FFFFE0'
    )
    slug = models.SlugField(
        max_length=10,
        unique=True,
        verbose_name='Уникальный ключ')

    class Meta:
        ordering = ['name']
        verbose_name = 'Заказчик'
        verbose_name_plural = 'Заказчик'

    def __str__(self):
        return self.name


class Well(models.Model):
    """Модель скважин."""
    STATUS = (
        ('В бурении', 'В бурении'),
        ('В ожидании', 'В ожидании'),
        ('Добурена', 'Добурена')
    )

    author = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='wells',
        verbose_name='Автор'
    )
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE,
        related_name='wells',
        verbose_name='Заказчик'
    )
    contractor = models.ForeignKey(
        Contractor, on_delete=models.CASCADE,
        related_name='wells',
        verbose_name='Подрядчик'
    )
    field = models.CharField(
        max_length=200,
        unique=True,
        verbose_name='Месторождение'
    )
    rig = models.CharField(
        max_length=10,
        blank=True,
        verbose_name='Куст'
    )
    well_number = models.CharField(
        max_length=10,
        verbose_name='Скважина'
    )
    status = models.CharField(max_length=20, choices=STATUS, verbose_name='Статус')
    

    class Meta:
        ordering = ['-id']
        verbose_name = 'Скважина'
        verbose_name_plural = 'Скважины'
        constraints = [
            models.UniqueConstraint(fields=['customer', 'field'],
                                    name='unique_customers_field')
        ]

    def __str__(self) -> str:
        return self.well_number