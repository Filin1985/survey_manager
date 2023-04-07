from django.contrib import admin

from .models import Customer, Well


class CustomerAdmin(admin.ModelAdmin):
    """Кастомизация админки для модели Customer."""
    list_display = ('name',)
    list_filter = ('name',)

    def favorite_count(self, obj):
        return obj.wells.count()


class WellAdmin(admin.ModelAdmin):
    """Кастомизация админки для модели Well."""
    list_filter = ('customer','field', 'well_number',)


admin.site.register(Customer, CustomerAdmin)
admin.site.register(Well, WellAdmin)
