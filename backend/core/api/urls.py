from rest_framework.routers import DefaultRouter
from dashboards.api.urls import dashboard_router
from django.urls import path, include

router = DefaultRouter()
# dash
router.registry.extend(dashboard_router.registry)

urlpatterns = [
    path('', include(router.urls))
]