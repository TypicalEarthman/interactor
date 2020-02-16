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
                    <form action="{{ route('project.create') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        Name:
                        <br />
                        <input type="text" name="name" />
                        <br /><br />
                        <input type="submit" value="Create new project" />
                    </form>
                </div>
                <div class="card">
                    <div class="card-header">Projects</div>
    
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        @foreach ($projects as $project)
                            <div>
                                <form action="{{ route('episode.show') }}" method="GET" enctype="multipart/form-data">
                                    <input type="hidden" name="project_id" value="{{$project->id}}"/>
                                    <input type="hidden" name="episode_id" value="0"/>
                                    <input type="submit" value="{{ $project->name }}" />
                                </form>
                            </div>
                        @endforeach
                    </div>
                </div>
                <form action="/logout" method="POST">
                    <button class="btn btn-primary">Logout</button>
                    @csrf
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
