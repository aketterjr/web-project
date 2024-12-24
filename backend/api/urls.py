from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.PostListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.PostDelete.as_view(), name="delete-note"),
]