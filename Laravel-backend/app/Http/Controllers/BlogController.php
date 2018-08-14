<?php

namespace App\Http\Controllers;

use App\Blogs;
use App\Post;
use App\Comments;
use App\User;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class BlogController extends Controller {

    private $page_length = 5;

    /* Hent alle Blogs */

    public function getAllBlogs() {
        $blogs = Blogs::paginate($this->page_length);
        return response()->json($blogs);
    }

    /* Hent alle Posts */

    public function getAllPosts($blogId) {

        $posts = Post::where('blog_id', '=', $blogId)->simplePaginate(15);
        return response()->json($posts);
    }

    /* Hent enkelt Post */

    public function getPost($postId) {

        $post = Post::with('comments')->where('id', $postId)->get();

        return response()->json($post);
    }

    /* Ny post */

    public function savePost(Request $request) {

        $this->validate($request, [
            'postTitle' => 'required|max:100',
            'postBody' => 'required|max:100',
        ]);
        $post = new Post();
        $post->blog_id = $request->get('blogId');
        $post->title = $request->get('postTitle');
        $post->summary = $request->get('postSummary');
        $post->content = $request->get('postBody');
        $post->created_by = "1";


        if ($post->save()) {
            $response = ['success' => 'true'];
            return response()->json($response);
        } else {
            $response = ['success' => 'false'];
            return response()->json($response);
        }
    }

    /* Ny komment */

    public function postComment(Request $request) {

        $this->validate($request, [
            'commentValue' => 'required|max:100',
        ]);
        $comment = new Comments();
        $comment->post_id = $request->get('postId');
        $comment->comment = $request->get('commentValue');
        $comment->creator_name = "Guest";


        if ($comment->save()) {
            $response = ['success' => 'true'];
            return response()->json($response);
        } else {
            $response = ['success' => 'false'];
            return response()->json($response);
        }
    }

}
