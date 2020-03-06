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
            <a href="{{ route('dashboard') }}" class="white">Dashboard</a>
            <form action="/logout" method="POST">
                <button>Logout</button>
                @csrf
            </form>
        @else
            <a href="{{ route('login') }}" class="white">Login</a>
            <a href="{{ route('register') }}" class="white">Register</a>
        @endauth
    </div>
</div>
@endsection