from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CustomUserViewSet, CustomTokenObtainPairView, register, LogoutView

app_name = 'users'

router = DefaultRouter()
router.register('users', CustomUserViewSet, basename='users')

auth_urls = [
    path('register/', register, name='register'),
]

urlpatterns = [
    path('', include(router.urls)),
    path('', include(auth_urls)),
    path('user/login/', CustomTokenObtainPairView.as_view(), 
         name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
]