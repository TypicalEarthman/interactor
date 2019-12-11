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
                                <a href='{{ url("editor?project={$project->id}") }}'>{{ $project->name }}</a>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
