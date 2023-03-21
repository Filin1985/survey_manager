from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'email', 'firstName',
            'lastName', 'organization', 'id'
        )


class CustomUserSerializerWithToken(CustomUserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = (
            'email', 'firstName',
            'lastName', 'organization', 'token', 'id'
        )

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Кастомный сериализатор для работы с токенами."""
    def validate(self, attrs):
        data = super().validate(attrs)
        serializers = CustomUserSerializerWithToken(self.user).data
        for key, value in serializers.items():
            data[key] = value
        return data