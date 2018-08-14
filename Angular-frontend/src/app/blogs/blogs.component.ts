import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.css'],
    providers: [BlogService],
})
export class BlogsComponent implements OnInit {
    blogsTitle = 'Blogs';
    title: string;
    id: number;
    Blogs: any;
    last_page: any;
    _last_page: number;
    current_page: number;
    total_Blogs: number;
    per_page: number;
    disablePrev: boolean;
    disableNext: boolean;
    inputFocused: boolean;
    isInEdit: boolean;
    index: number;

    constructor(private _blogService: BlogService, private _modalService: NgbModal) {
        this.inputFocused = false;
        this.index = 0;
    }

    ngOnInit() {
        var result = this._blogService.getBlogs();
        result.subscribe((data) => {
            this.last_page = Array(data.last_page);
            this._last_page = data.last_page;
            this.current_page = data.current_page;
            this.per_page = data.per_page;
            this.Blogs = data.data;
            this.disableNext = true;
            this.disablePrev = false;
            this.total_Blogs = data.total;

        });
    }

    pageNumber(_number) {
        this.current_page = _number;
        if (this.current_page == 1) {
            this.disablePrev = false;
            this.disableNext = true;
        } else if (this.current_page == this._last_page) {
            this.disableNext = false;
            this.disablePrev = true;
        } else {
            this.disablePrev = true;
            this.disableNext = true;
        }
        var result = this._blogService.getMoreBlogs(this.current_page);
        result.subscribe((data) => {
            this.Blogs = data.data;
        });
  }

}
