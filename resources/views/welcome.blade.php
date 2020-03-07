@extends('layouts.app')

@section('content')
<div class="content-home">
    <div class="header">
        @auth
            Nice to meet you, {{ Auth::user()->name }}
        @else
            Welcome to Interactor.
        @endif
    </div>

    <div class="links">
        @auth
            <a href="{{ route('dashboard') }}">Dashboard</a>
            <form action="/logout" method="POST">
                <button class="red">Logout</button>
                @csrf
            </form>
        @else
            <a href="{{ route('login') }}">Login</a>
            <a href="{{ route('register') }}">Register</a>
        @endauth
    </div>
</div>
@endsection