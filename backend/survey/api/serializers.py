from rest_framework import serializers
from .fields import Hex2NameColor

from contractors.models import Contractor
from customers.models import Well, Customer

class CustomerSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Customer."""
    wells = serializers.SerializerMethodField()

    class Meta:
        model = Customer
        fields = ('id', 'name', 'wells')

    def get_wells(self, obj):
        return len(WellSerializer(Well.objects.filter(customer=obj, status="В бурении"), many=True).data)


class ContractorSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Contractor."""
    wells = serializers.SerializerMethodField()

    class Meta:  
        model = Contractor
        fields = ('id', 'name', 'email', 'phone', 'wells')

    def get_wells(self, obj):
        return len(WellSerializer(Well.objects.filter(contractor=obj, status="В бурении"), many=True).data)

class WellSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Well."""
    contractor = serializers.CharField(source='contractor.name')
    customer = serializers.CharField(source='customer.name')
    contractor_id = serializers.IntegerField(source='contractor.id')
    customer_id = serializers.IntegerField(source='customer.id')

    class Meta:
        model = Well
        fields = ('id','author', 'customer', 'contractor_id', 'contractor', 'field', 'rig', 'well_number', 'status', 'customer_id', 'start_depth', 'current_depth', 'plan_depth', 'telesystem', 'telesystem_number', 'sag', 'north', 'current_correction', 'correction_value', 'start_date', 'amplitude', 'latitude', 'longtitude', 'NY', 'EX', 'geomagnetic_model', 'geomagnetic_date', 'north_direction', 'btotal', 'gtotal', 'dip', 'magn', 'meridian', 'critical_azimuth')