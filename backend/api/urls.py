from django.urls import path
from . import views
from .views import get_trending_books

urlpatterns = [
    path("trending-books/", get_trending_books, name="trending-books"),
    path("posts/", views.PostListCreate.as_view(), name="post-list"),
    path("posts/delete/<int:pk>/", views.PostDelete.as_view(), name="delete-post"),
]