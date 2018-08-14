import {Injectable} from '@angular/core';
import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BlogService{

  constructor(private _http: Http){
    console.log("Service is ready!");

  }
  closeResult: string;

  //hent alle blogs
  getBlogs(){
    return this._http
               .get("http://35.162.97.188/api/blogs", {})
               .map(res => res.json())
  }

  //hent alle posts
  getPosts(blogId){
    return this._http
               .get("http://35.162.97.188/api/posts/"+blogId, {})
               .map(res => res.json())
  }

  //hent enkelt post
  getPost(postId){
    return this._http
               .get("http://35.162.97.188/api/post/"+postId, {})
               .map(res => res.json())
  }
  //ny post
  postNew(postData){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http
               .post('http://35.162.97.188/api/post', JSON.stringify(postData),{headers:headers})
               .map(res => res.json())
  }
  //post komment
  postComment(commentData){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http
               .post('http://35.162.97.188/api/post/comment', JSON.stringify(commentData),{headers:headers})
               .map(res => res.json())
  }

  getMoreBlogs(id){
    return this._http
                .get('/api/blogs?page='+ id)
                .map(res => res.json())
  }



}
