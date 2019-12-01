@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>
                        Dashboard
                    </h3>
                    <button type="button" class="btn btn-primary new-post">
                        <span class="p-2">Add Post</span><i class="fa fa-plus"></i>
                    </button>
                </div>

                <div class="modal fade" id="postModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Create a New Post</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="{{route('Post')}}" method="POST">
                                    @csrf
                                    <input id="post_id" name="post_id" type="hidden" value=""/>
                                    <div class="d-flex align-items-center justify-content-between form-group">
                                        <label class="p-1">Title</label>
                                        <input id="title" class="col-10 form-control" type="text" name="title"/>
                                    </div>
                                    <div class="d-flex align-items-start justify-content-between form-group">
                                        <label class="p-1">Content</label>
                                        <textarea id="content" rows="15" class="col-10 form-control" name="content"></textarea>
                                    </div>
                                    <div class="modal-footer px-0">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                        <button id="submitBtn" type="submit" class="btn btn-success">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    @foreach ($posts as $post)
                        @component('components.post', ['post'=>$post])@endcomponent
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
