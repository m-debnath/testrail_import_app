from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from testrail import *

TESTRAIL = APIClient('https://tele2se.testrail.net/')


class UserLoginForm(AuthenticationForm):
    def confirm_login_allowed(self, user):
        return None
        
    def clean(self):
        global TESTRAIL

        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if username and password:
            try:
                TESTRAIL.user = username
                TESTRAIL.password = password
                response = TESTRAIL.send_get(f'get_user_by_email&email={username}')
                self.cleaned_data['Name'] = response.get('name')
            except APIError as e:
                raise forms.ValidationError(
                    self.error_messages['invalid_login'],
                    code='invalid_login',
                    params={'username': self.username_field.verbose_name},
                )

        return self.cleaned_data
