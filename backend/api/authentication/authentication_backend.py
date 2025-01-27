from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class EmailOrUsernameBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = get_user_model().objects.get(username=username)
        except get_user_model().DoesNotExist:
            try:
                user = get_user_model().objects.get(username=username)
            except get_user_model().DoesNotExist:
                user = None

        if user and user.check_password(password):
            return user
        return None