from rest_framework.routers import DefaultRouter
from .views import DashboardViewSet

dashboard_router = DefaultRouter()
dashboard_router.register(r'dashboards', DashboardViewSet)