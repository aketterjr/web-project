from django.contrib import admin
from .models import Author, Genre, Book, Language, Post, Comment

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
# admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(Language)
class CommentAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Comment Information', {
            'fields': ('content', 'post', 'author', 'created_at')
        }),
    )
    list_display = ('content', 'post', 'author', 'created_at')
    readonly_fields = ('created_at',)

admin.site.register(Comment, CommentAdmin)

class CommentInline(admin.TabularInline):
    model = Comment

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'content')

    inlines = [CommentInline]

admin.site.register(Post, PostAdmin)