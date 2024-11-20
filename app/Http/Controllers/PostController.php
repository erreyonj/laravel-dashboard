<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public ?Post $post = null;

    public function __construct(){
        $this->post = Post::where('route_name', 'post.id');
    }

    public function index(){

    }

    public function postActionFunc(Request $request){

    }
}



