from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import TokenObtainPairView, NotificationViewSet, UserNotificationStatsView
from .yasg import urlpatterns as doc_urls

router = DefaultRouter()
router.register(r'notifications', NotificationViewSet, basename='notifications')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('stats/', UserNotificationStatsView.as_view(), name='stats'),
    path('', include(router.urls))
]

urlpatterns += doc_urls