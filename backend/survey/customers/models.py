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
    start_depth = models.IntegerField(
        blank=True,
        null=True,
        verbose_name='Начальная глубина'
    )
    current_depth = models.IntegerField(
        blank=True,
        null=True,
        verbose_name='Текущая глубина'
    )
    plan_depth = models.IntegerField(
        blank=True,
        null=True,
        verbose_name='Плановая глубина'
    )
    telesystem = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        verbose_name='Телесистема'
    )
    telesystem_number = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        verbose_name='Номер телесистемы'
    )
    sag = models.FloatField(
        blank=True,
        null=True,
        verbose_name='SAG'
    )
    north = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        verbose_name='Привязка к северу'
    )
    current_correction = models.CharField(
        max_length=20,
        blank=True,
        null=True,
        verbose_name='Текущая коррекция'
    )
    current_correction = models.CharField(
        max_length=20,
        blank=True,
        null=True,
        verbose_name='Текущая коррекция'
    )
    correction_value = models.FloatField(
        blank=True,
        null=True,
        verbose_name='Значение поправки'
    )
    start_date = models.DateField(
        max_length=10,
        blank=True,
        null=True,
        verbose_name='Дата начала сопровождения'
    )
    current_correction = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name='Система координат'
    )
    amplitude = models.IntegerField(
        blank=True,
        null=True,
        verbose_name='Амплитуда точки отсчета'
    )
    latitude = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name='Широта'
    )
    longtitude = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name='Долгота'
    )
    NY = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        verbose_name='NY'
    )
    EX = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        verbose_name='NX'
    )
    geomagnetic_model = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        verbose_name='Геомагнитная модель'
    )
    geomagnetic_date = models.DateField(
        blank=True,
        null=True,
        verbose_name='Дата геомагнитная модель'
    )
    north_direction = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        verbose_name='Направление на север'
    )
    btotal = models.FloatField(
        blank=True,
        null=True,
        verbose_name='Btotal'
    )
    gtotal = models.FloatField(
        blank=True,
        null=True,
        verbose_name='Gtotal'
    )
    dip = models.FloatField(
        blank=True,
        null=True,
        verbose_name='Dip'
    )
    magn = models.FloatField(
        blank=True,
        null=True,
        verbose_name='Магнитное склонение'
    )
    meridian = models.FloatField(
        blank=True,
        null=True,
        verbose_name='Угол схождения меридианов'
    )
    critical_azimuth = models.BooleanField(
        blank=True,
        null=True,
        verbose_name='Критический азимут'
    )
    status = models.CharField(max_length=20, choices=STATUS, verbose_name='Статус')
    

    class Meta:
        ordering = ['-id']
        verbose_name = 'Скважина'
        verbose_name_plural = 'Скважины'
        constraints = [
            models.UniqueConstraint(fields=['field', 'rig', 'well_number'],
                                    name='unique_rig_well')
        ]

    def __str__(self) -> str:
        return self.well_number