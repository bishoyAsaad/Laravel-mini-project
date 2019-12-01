<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    public function user() {
        return $this->BelongsTo('App\User');
    }

    public function post() {
        return $this->BelongsTo('App\Post');
    }
}
