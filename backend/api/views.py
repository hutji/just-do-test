from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Notification
from .serializers import NotificiationSerializer
from django.contrib.auth import get_user_model


User = get_user_model()


class TokenObtainPairView(TokenObtainPairView):
    '''Вьюсет токена'''
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            response.set_cookie('jwt', response.data['access'], httponly=True)
        return response


class NotificationViewSet(viewsets.ModelViewSet):
    '''Вьюсет уведомлений'''
    serializer_class = NotificiationSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        if user.is_superuser:
            return Notification.objects.all()
        else:
            return Notification.objects.filter(user=user)


class NotificationCreate(generics.CreateAPIView):
    '''Создание уведомления'''
    permission_classes = [IsAuthenticated]
    serializer_class = NotificiationSerializer


class UserNotificationStatsView(generics.ListAPIView):
    '''Вьюсет статистики'''
    serializer_class = NotificiationSerializer
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        user = self.request.user()
        return Notification.objects.filter(user=user)
    
    def get_list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        data = {
            'info_count': queryset.filter(notification='info').count(),
            'warning_count': queryset.filter(notification='warnin').count(),
            'error': queryset.filter(notification='error').count()
        }
        return Response(data)
