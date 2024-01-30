from channels.generic.websocket import AsyncWebsocketConsumer
from api.serializers import NotificiationSerializer

class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add(
            'notifications',
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            'notifications',
            self.channel_name
        )

    async def send_notification(self, event):
        notification = event['notification']
        serializer = NotificiationSerializer(notification)
        await self.send(text_data=serializer.data)

    async def notifications_update(self, event):
        notifications = event['notifications']
        serializer = NotificiationSerializer(notifications, many=True)
        await self.send(text_data=serializer.data)
