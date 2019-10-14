<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    protected $fillable = ['title', 'slug', 'post_id', 'shortdescription', 'fulldescription', 'author', 'image', 'other_images', 'video_url', 'order', 'feature_product', 'platform', 'status'];
}
