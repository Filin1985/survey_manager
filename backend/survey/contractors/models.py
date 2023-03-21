from colorfield.fields import ColorField
from django.db import models

# Create your models here.
class Contractor(models.Model):
    """Модель подрядчиков."""
    name = models.CharField(
        max_length=50,
        unique=True,
        verbose_name='Название'
    )

    email = models.EmailField(
        max_length=50,
        unique=True,
        verbose_name='Почта'
    )
    phone = models.CharField(
        unique=True,
        max_length=15,
        verbose_name='Телефон',
    
    )

    class Meta:
        ordering = ['name']
        verbose_name = 'Подрядчик'
        verbose_name_plural = 'Подрядчики'

    def __str__(self):
        return self.name