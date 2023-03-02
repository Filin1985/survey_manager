from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ContractorViewSet, WellViewSet

app_name = 'api'

router = DefaultRouter()
router.register('services', ContractorViewSet, basename='services')
router.register('wells', WellViewSet, basename='wells')

urlpatterns = [
    path('', include(router.urls)),
]