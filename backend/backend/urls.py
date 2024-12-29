from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView, get_current_user
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.http import HttpResponse


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/user/current_user/", get_current_user, name="current_user"),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("api.urls")),
]
