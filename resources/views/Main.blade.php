@extends('layouts.app')

@section('title', 'Main Page')

@section('content')
<div class="col-12 d-flex">
    <div class="col-6 text-center d-flex justify-content-center flex-wrap align-content-start h80">
        <div class="col-12 px-4 py-2">
            <h3 class="col-10 bg-primary p-3 text-white m-auto rounded">Latest Posts</h3>
        </div>
        <div class="col-10 d-flex justify-content-center flex-wrap h-100 overflow-auto">
        @foreach ($posts as $post)
            @component('components.post', ['post'=>$post])@endcomponent
        @endforeach
        </div>
    </div>
    <div class="col-6 text-center d-flex justify-content-center flex-wrap align-content-start h80">
        <div class="col-12 px-4 py-2">
            <h3 class="col-10 bg-primary p-3 text-white m-auto rounded">Latest Activity</h3>
        </div>
        <div class="col-10 d-flex justify-content-center flex-wrap h-100 overflow-auto">
            @foreach ($trendingPosts as $post)
                @component('components.post', ['post'=>$post->post])@endcomponent
            @endforeach
        </div>
    </div>
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
@endsection