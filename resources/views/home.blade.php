@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <form action="{{ route('video.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        Name:
                        <br />
                        <input type="text" name="name" />
                        <br /><br />
                        Video:
                        <br />
                        <input type="file" name="video" />
                        <br /><br />
                        <input type="submit" value=" Upload " />
                    </form>
                </div>
                <div class="card">
                    <div class="card-header">Videos</div>
    
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        @foreach ($videos as $video)
                            <div>
                                <h2> {{ $video->name }} </h2>
                                <video src="{{ asset("{$video->url}") }}" width="400" controls="controls">
                                </video>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
