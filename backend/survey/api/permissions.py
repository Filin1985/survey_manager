from rest_framework import permissions


class IsEngineer(permissions.BasePermission):
    def has_permission(self, request, view):
        return (request.user.is_authenticated and request.user.is_moderator)