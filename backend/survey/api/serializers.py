from rest_framework import serializers
from .fields import Hex2NameColor

from contractors.models import Contractor
from customers.models import Well

class ContractorSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Contractor."""
    class Meta:
        model = Contractor
        fields = '__all__'

class WellSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Well."""
    class Meta:
        model = Well
        fields = '__all__'