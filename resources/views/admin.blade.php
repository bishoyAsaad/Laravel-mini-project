@extends('layouts.app')

@section('title', 'Admin Dashboard')

@section('content')
<div class="col-8 bg-primary p-1 rounded m-auto">
    <div class="p-2 d-flex align-items-center justify-content-between">
        <div></div>
        <h4 class="p-2 text-center text-white">
            Admin Dasboard
        </h4>
        <div id="add-user" class="float-right text-white pointer p-2">
            <span>
                <i class="fa fa-plus fa-2x"></i>
            </span>
        </div>
    </div>
    <div class="d-flex col-12 m-auto flex-wrap bg-light rounded">
        <table class="table">
            <tr class="d-table-row">
                <th>Name</th>
                <th class="text-center">Role</th>
                <th>Email</th>
                <th class="text-center">Options</th>
            </tr>
        @foreach($users as $user)
        @component('components.user', ['user'=>$user])@endcomponent
        @endforeach
        </table>
    </div>

    <div class="py-2 d-flex flex-wrap justify-content-between">
        <div class="d-flex">
            <div class="pr-2">
                <button onclick="filter(1)" class="btn btn-light">
                    Show Admins only
                </button>
            </div>
            <div class="px-1">
                <button onclick="filter(2)" class="btn btn-light">
                    Show Authors only
                </button>
            </div>
            <div class="px-2">
                <button onclick="filter(3)" class="btn btn-light">
                    Show Users only
                </button>
            </div>
        </div>
        <div>
            <button onclick="filter(0)" class="btn btn-outline-warning float-right">
                Show All Users
            </button>
        </div>
    </div>

    <div class="modal fade"id="userModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-0">
                <form class="p-2" action="{{route('user')}}" method="POST">
                    @csrf
                    <input id="user_id" name="id" type="hidden" value=""/>
                    <div class="d-flex flex-wrap justify-content-between">
                        <div class="form-group col-4">
                            <label>
                                Name
                            </label>
                            <input id="name" class="form-control" name="name" type="text"/>
                        </div>
                        <div class="form-group col-4">
                            <label>
                                Role
                            </label>
                            <select id="role" name="role" class="form-control">
                                <option value="1">Admin</option>
                                <option value="2">Author</option>
                                <option selected value="3">User</option>
                            </select>
                        </div>
                        <div class="form-group col-12">
                            <label>
                                Email
                            </label>
                            <input id="email" class="form-control" name="email" type="email"/>
                        </div>
                        <div class="form-group col-12">
                            <label>
                                Password
                            </label>
                            <input id="password" class="form-control" name="password" type="password"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                        <button id="submitBtn" type="submit" class="btn btn-success">Create</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</div>
@endsection