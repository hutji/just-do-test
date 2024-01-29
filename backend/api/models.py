from django.db import models
from django.contrib.auth.models import User


class Notification(models.Model):
    INFO = 'info'
    WARNING = 'warnin'
    ERROR = 'error'
    NOTIFICATIONS = [
        (INFO, 'Informational'),
        (WARNING, 'Warning'),
        (ERROR, 'Errror')
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    notification = models.CharField(max_length=25, choices=NOTIFICATIONS)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} - {self.notification}'
