@extends('layouts.app')

@section('title', 'Admin Dashboard')

@section('content')
<div class="col-6 m-auto">
@foreach ($posts as $post)
    @component('components.post', ['post'=>$post])@endcomponent
@endforeach
@if (count($posts) == 0) 
<div class="text-center p-5 h4">Nothing found </div>
@endif
</div>
@endsection