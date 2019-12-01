<div class="p-2">
    <div class="text-left">
        <a class="h5" href="{{route('userGet', $comment->user->name)}}">{{$comment->user->name}}</a> commented on {{$comment->updated_at}}
    </div>
    <div class="p-1 border border-danger rounded d-flex justify-content-between position-relative comment">
        <div class="content" value="{{$comment->id}}">{{$comment->content}}</div>
        @auth
        @if (Auth::user()->id == $comment->user->id || Auth::user()->role == 1)
        <span class="c-menu-toggle"><i class="fa fa-comment-dots pointer p-2 text-danger"></i></span>
        <div class="c-menu position-absolute bg-white rounded align-right p-1 border border-danger text-center">
            <div class="p-1">    
                <button value="{{$post->id}}" class="pointer edit-comment btn btn-outline-info col-12">
                    edit
                </button>
            </div>
            <form action="{{route('deleteComment')}}" method="POST">
                @csrf
                <input type="hidden" name="del_comment_id" value="{{$comment->id}}"/>
                <div class="p-1">
                    <button type="submit" class="btn btn-outline-danger">
                        delete
                    </button>
                </div>
            </form>
        </div>
        @endif
        @endauth
    </div>
</div>