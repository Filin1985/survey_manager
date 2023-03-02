from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.base_user import BaseUserManager

from survey.settings import EMAIL_MAX_LENGTH, NAME_MAX_LENGTH


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Users require an email field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

class User(AbstractUser):
    """Модель пользователя."""
    ADMIN = 'admin'
    USER = 'user'
    MODERATOR = 'moderator'
    ROLES = [
        (ADMIN, 'Админ'),
        (MODERATOR, 'Инженер'),
        (USER, 'Пользователь'),
    ]

    username = None
    email = models.EmailField(
        max_length=EMAIL_MAX_LENGTH,
        unique=True,
        verbose_name='Электронная почта'
    )
    firstName = models.CharField(max_length=NAME_MAX_LENGTH, blank=True, verbose_name='Имя')
    lastName = models.CharField(max_length=NAME_MAX_LENGTH, blank=True, verbose_name='Фамилия')
    organization = models.CharField(max_length=NAME_MAX_LENGTH, blank=True, verbose_name='Организация')
    role = models.CharField(
        max_length=max(len(value) for value, _ in ROLES),
        choices=ROLES,
        default=USER,
        verbose_name='Роль'
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        ordering = ['email']
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    @property
    def is_admin(self):
        return (
            self.role == self.ADMIN
            or self.is_staff
        )
    
    @property
    def is_moderator(self):
        return (
            self.role == self.MODERATOR
            or self.is_staff
        )
    
    def __str__(self):
        return f'{self.email} {self.first_name} {self.last_name}'
