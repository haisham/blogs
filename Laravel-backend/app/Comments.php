<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    public function newCollection(array $models = [])
    {
        return new CommentCollection($models);
    }
 
}
