<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/api', function () {
    return view('welcome');
});

Route::get('/api/blogs', 'BlogController@getAllBlogs');
Route::get('/api/posts/{blogId}', 'BlogController@getAllPosts');
Route::post('/api/post', 'BlogController@savePost');
Route::get('/api/post/{postId}', 'BlogController@getPost');
Route::post('/api/post/comment', 'BlogController@postComment');





