<?php

namespace App\Http\Controllers;

use App;
use App\Http\Controllers\Auth\RegisterController;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Controller\ErrorController;

class UserController extends Controller
{
    public function index($user) {
        $user = User::where('name', $user)->first();
        if ($user) return view('user', ['posts'=>$user->posts()->get(), 'user'=>$user->name]);
        else return App::abort(404);
    }

    public function admin() {
        return view('admin', ['users'=>User::all()]);
    }

    public function user(Request $req) {
        $user = User::find($req->input('id'));
        if ($user) {
            $user->name = $req->input('name');
            $user->email = $req->input('email');
            $user->role = $req->input('role');
            if ($req->input('password') != "") {
                $user->password = Hash::make($req->input('password'));
                return 'password changed';
            }
            $user->save();
        } else {
            $user = new User();
            $user->name = $req->input('name');
            $user->email = $req->input('email');
            $user->role = $req->input('role');
            $user->password = Hash::make($req->input('password'));
            $user->save();
        }
        return back();
        
    }

    public function delete($id) {
        $user = User::findOrFail($id);
        $user->delete();
    }
}
