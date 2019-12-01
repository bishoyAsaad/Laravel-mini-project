@extends('layouts.app')

@section('title', 'Contact Us')



@section('content')

<div class="col-12 d-flex">
    <div class="col-12">
        <div class="rounded bg-white col-6 text-center m-auto p-5">
            <h1 class="text-primary p-3">Contact Us</h1>
            <div class="p-2 text-left">
                This is some info about us.
            </div>
            <div class="d-flex p-2 justify-content-between">
                <div class="d-flex p-2">
                    <div class="p-2">
                        Tel.
                    </div>
                    <div class="p-2">
                        0123456791
                    </div>
                </div>
                <div class="d-flex p-2">
                    <div class="p-2">
                        Address. 
                    </div>
                    <div class="p-2">
                        Street, City, Country
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection