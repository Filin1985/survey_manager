from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from contractors.models import Contractor
from customers.models import Well
from .serializers import ContractorSerializer, WellSerializer
from .permissions import IsEngineer



class ContractorViewSet(ModelViewSet):
    """
    Endpoint для получения списка подрядчиков.
    """
    queryset = Contractor.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = ContractorSerializer
    pagination_class = None

class WellViewSet(ModelViewSet):
    """
    Endpoint для получения списка скважин.
    """
    queryset = Well.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = WellSerializer
    pagination_class = None