<?php

use Illuminate\Http\Request;
use App\Post;
use App\Comment;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Main', ['posts'=>Post::orderBy('created_at', 'desc')->limit(10)->get(),
     'trendingPosts'=>Comment::orderBy('created_at', 'desc')->limit(15)->get()]);
})->name('main');

Route::get('/contact', function() {
    return view('contact');
})->name('contact');

Route::get('/search', function(Request $req) {
    if ($req->input('query') != '')
    return Post::where('title', 'like', '%'.$req->input('query').'%')->get();
});

Route::get('/searchPage', function(Request $req) {
    if ($req->input('query') != '')
    return view('search', ['posts'=>Post::where('title', 'like', '%'.$req->input('query').'%')->get()]);
});

Route::get('/post/{id}', 'PostController@index')->name('postGet');
Route::get('/user/{user}', 'UserController@index')->name('userGet');

Auth::routes(['verify' => true]);

Route::group(['middleware'=>['auth', 'verified']], function () {
    Route::get('/home', 'HomeController@index')->name('home');
    Route::post('/post/comment', 'PostController@Comment')->name('Comment');
    Route::post('/post/comment/delete', 'PostController@delComment')->name('deleteComment');

    Route::post('/post', 'PostController@post')->name('Post');
    Route::delete('/post', 'PostController@delete')->name('delete');
});

Route::group(['middleware'=>['auth', 'verified', 'isAdmin']], function() {
    Route::get('/admin', 'UserController@admin')->name('admin');
    Route::post('/user', 'UserController@user')->name('user');
    Route::delete('/user/{id}', 'UserController@delete')->name('deleteUser');
});