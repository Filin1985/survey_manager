from djoser.views import UserViewSet
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password
from django.db import IntegrityError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.views import  TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, action

from .models import User
from .serializers import CustomUserSerializer, CustomTokenObtainPairSerializer, CustomUserSerializerWithToken


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    """Вьюсет для регистрации пользователя."""
    data=request.data
    print(data)
    try:
        user, _created = User.objects.get_or_create(
            firstName=data['firstName'],
            lastName=data['lastName'],
            email=data['email'],
            organization=data['organization'],
            password=make_password(data['password'])
        )
    except IntegrityError:
        return Response(
            {
                'message':
                'Пользователь с такой почтой уже существует.'
            },
            status=status.HTTP_400_BAD_REQUEST
        )
    serializer = CustomUserSerializerWithToken(user, many=False)
    return Response(
        data=serializer.data,
        status=status.HTTP_200_OK
    )

class CustomUserViewSet(UserViewSet):
    """Кастомный вьюсет для работы с пользователями."""
    queryset = User.objects.all()
    permission_classes = (IsAdminUser, )
    serializer_class = CustomUserSerializer

    @action(methods=['GET'], permission_classes=[IsAuthenticated], detail=False)
    def profile(self, request, *args, **kwargs):
        self.object = get_object_or_404(User, pk=request.user.id)
        serializer = self.get_serializer(self.object)
        return Response(serializer.data)


class CustomTokenObtainPairView(TokenObtainPairView):
    """Кастомный вьюсет для работы с токенами"""
    serializer_class = CustomTokenObtainPairSerializer


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            print(request.data["refreshToken"])
            refresh_token = request.data["refreshToken"]
            token = RefreshToken(refresh_token)
            
            token.blacklist()

            return Response('Пользователь вышел из системы.')
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)