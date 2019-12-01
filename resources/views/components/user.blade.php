<tr class="d-table-row user" value="{{$user->id}}">
    <td class="d-table-cell col-2 name">
        <a href="{{route('userGet', $user->name)}}">
        {{$user->name}}
        </a>
    </td>
    <td class="d-table-cell text-center col-1 role">
        {{role($user->role)}}
    </td>
    <td  class="d-table-cell col-8 email">
        {{$user->email}}
    </td>
    <td  class="d-table-cell text-center">
        <span class="p-1 pointer edit-user"><i class="fa fa-edit text-warning"></i></span>
        <span value="{{$user->id}}" class="p-1 pointer delete-user"><i class="fa fa-trash text-danger"></i></span>
    </td>
</tr>