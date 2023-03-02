from django.contrib import admin

from .models import Contractor


class ContrctorAdmin(admin.ModelAdmin):
    """Кастомизация админки для модели Customer."""
    list_display = ('name',)
    list_filter = ('name',)


admin.site.register(Contractor, ContrctorAdmin)