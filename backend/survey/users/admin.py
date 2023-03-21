from django.contrib import admin

from .models import  User


class UserAdmin(admin.ModelAdmin):
    """Кастомизация админки для модели User."""
    list_filter = ('lastName', 'email')


admin.site.register(User, UserAdmin)
