<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function Comment(Request $req) {
        
        if ($req->input('comment')) {
            if ($req->input('comment_id')) {
                $comment = Comment::findOrFail($req->input('comment_id'));
                if (Auth::user()->can('update', $comment)) {
                    $comment = $comment;
                    $comment->content = $req->input('comment');
                    $comment->save();
                } else return abort(403, 'Unauthorized action.');
            } else {
                if (Auth::user()->can('create', Comment::class)) {
                    $comment = new Comment();
                    $comment->content = $req->input('comment');
                    $comment->post_id = $req->input('post_id');
                    Auth::user()->comments()->save($comment);
                } else return abort(403, 'Unauthorized action.');
            }
        }
        return back();
    }

    public function delComment(Request $req) {

        $comment = Comment::findOrFail($req->input('del_comment_id'));
        if (Auth::user()->can('delete', $comment)) {

            $comment = Comment::findOrFail($req->input('del_comment_id'));
            $comment->delete();

        } else return abort(403, 'Unauthorized action.');

        return back();
    }

    public function index($id) {
        return view('post', ['post'=>Post::findOrFail($id)]);
    }

    public function post(Request $req) {
        if ($req->input('post_id')=="") {
            $this->create($req);
        } else $this->edit($req);
        return back();
    }
    
    public function create(Request $req) {
        if (Auth::user()->can('create', Post::class)) {
            $post = new Post();
            $post->title = $req->input('title');
            $post->content = $req->input('content');
            Auth::user()->posts()->save($post);
        } else return abort(403, 'Unauthorized action.');
    }

    public function edit(Request $req) {
        $post = Post::findOrFail($req->input('post_id'));
        if (Auth::user()->can('update', $post)) {
            $post->title = $req->input('title');
            $post->content = $req->input('content');
            $post->save();
        } else return abort(403, 'Unauthorized action.');
    }

    public function delete(Request $req) {
        $post = Post::findOrFail($req->input('post_id'));
        if (Auth::user()->can('delete', $post)) {
            $post->delete();
        } else return abort(403, 'Unauthorized action.');
    }
}
