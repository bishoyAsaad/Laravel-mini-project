<div class="p-2 col-12">
    <div class="border border-primary p-2 rounded post">
        <div class="h4 p-0 rounded bg-primary text-white d-flex justify-content-between align-items-start">
            @if(Request::is('post/*'))
            <h4 class="m-0 p-2 post-title align-self-center">{{$post->title}}</h4>
            @else
            <a class="text-white" href="{{route('postGet', $post->id)}}"><h4 class="m-0 p-2 post-title align-self-center">{{$post->title}}</h4></a>
            @endif
            @auth
            @if (Auth::user()->id == $post->user->id || Auth::user()->role == 1)
            <div class="d-flex bg-white rounded align-items-center align-self-stretch border border-primary">
                <span class="px-2"><i value="{{$post->id}}" class="fa fa-edit pointer text-primary edit-post"></i></span>
                <span class="px-1"><i value="{{$post->id}}" class="fa fa-trash p-1 rounded pointer text-danger delete-post"></i></span>
            </div>
            @endif
            @endauth
        </div>
        <div class="p-2 post-content">
            {{$post->content}}
        </div>
        <div class="text-right p-2">
            <a class="btn-link btn btn-primary text-white" href="{{route('userGet', $post->user->name)}}">{{$post->user->name}}</a>
        </div>
        @foreach ($post->comments as $comment)
            @component('components.comment', ['comment'=>$comment, 'post'=>$post])@endcomponent
        @endforeach
        @auth
        <div class="p-2">
            <div class="rounded bg-primary p-2 text-white add-comment">
                <div class="p-2 text">
                    Add Comment
                </div>
                <form class="col-12 d-flex justify-content-between p-0" action="{{route('Comment')}}" method="POST">
                    @csrf
                    <input name="post_id" type="hidden" value="{{$post->id}}">
                    <div class="d-flex col-12 p-0">
                        <div class="px-1 col">
                            <input id="{{'post'.$post->id}}" name="comment" type="text" class="col-12 px-2 form-control"/>
                        </div>
                        <button class="btn btn-light">Submit</button>
                    </div>
                </form>
            </div>                  
        </div>
        @endauth
    </div>
</div>