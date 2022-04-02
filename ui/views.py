from django.shortcuts import render, redirect
from django.contrib import messages
from testrail import *
from .forms import UserLoginForm
from django.templatetags.static import static

MESSAGE_TAGS = {
    messages.ERROR: 'danger',
}

def home(request):
    try:
        username = request.session['username']
        password = request.session['password']
        session_data = json.dumps({
            'username': username,
            'password': password
        })
        return render(request, 'ui/home.html', {
            'session_data': session_data,
            'STATIC_URL': static(''),
        })
    except KeyError:
        return redirect('login')

def login(request):
    if request.method == 'POST':
        form = UserLoginForm(data=request.POST)
        if form.is_valid():
            request.session['username'] = form.cleaned_data.get('username')
            request.session['password'] = form.cleaned_data.get('password')
            return redirect('home')
    else:
        try:
            username = request.session['username']
            return redirect('home')
        except KeyError:
            form = UserLoginForm()
    return render(request, 'ui/login.html', {
        'form': form,
        'session_data': {},
        'STATIC_URL': static('')
    })


def logout(request):
    try:
        del request.session['username']
        del request.session['password']
        messages.error(request, 'You\'re now logged out.')
    except KeyError:
        messages.warning(request, 'Please login first.')
    return redirect('login')