from rest_framework.serializers import ModelSerializer
from ..models import Dashboard

class DashboardSerializer(ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ('id', 'title', 'link')