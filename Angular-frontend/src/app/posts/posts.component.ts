import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { ViewPostComponent } from '../view-post/view-post.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [BlogService, ViewPostComponent]
})
export class PostsComponent implements OnInit {
    postsTitle = 'Indlæg';
    title: string;
    id: number;
    Posts: any;
    last_page: any;
    _last_page: number;
    current_page: number;
    total_Posts: number;
    per_page: number;
    disablePrev: boolean;
    disableNext: boolean;
    inputFocused: boolean;
    isInEdit: boolean;
    index: number;
    @Input() blogId;

    constructor(private _blogService: BlogService, private _modalService: NgbModal, private activatedRoute: ActivatedRoute) {
        this.inputFocused = false;
        this.index = 0;
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
        this.blogId = params['blogId'];
        this.loadPosts(this.blogId);
        });
    }

    loadPosts(blogId) {
        var result = this._blogService.getPosts(blogId);
        result.subscribe((data) => {
            this.last_page = Array(data.last_page);
            this._last_page = data.last_page;
            this.current_page = data.current_page;
            this.per_page = data.per_page;
            this.Posts = data.data;
            this.disableNext = true;
            this.disablePrev = false;
            this.total_Posts = data.total;

        });
    }

    viewPost(Post) {
        const modal =  this._modalService.open(ViewPostComponent);
        modal.componentInstance.Post = Post;
    }

    createPost() {
        const modal =  this._modalService.open(CreatePostComponent);
        modal.componentInstance.blogId = this.blogId;
        modal.result.then((data) => {
            if (data === "refresh") this.loadPosts(this.blogId);
        }, (reason) => {

        });
    }

}
