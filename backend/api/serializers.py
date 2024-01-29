from rest_framework import serializers
from .models import User, Notification


class NotificiationSerializer(serializers.ModelSerializer):
    '''Сериализатор для модели уведомлений'''
    class Meta:
        model = Notification
        fields = '__all__'
