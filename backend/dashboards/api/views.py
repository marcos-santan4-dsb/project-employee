from rest_framework.viewsets import ModelViewSet
from ..models import Dashboard
from .serializers import DashboardSerializer

class DashboardViewSet(ModelViewSet):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer