import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
  providers: [BlogService]
})
export class ViewPostComponent implements OnInit {

  constructor(public _blogService: BlogService, public activeModal: NgbActiveModal) {}
  PostData: any;
  Comments: any;
  formdata;
  @Input() Post;

  ngOnInit() {
        this.formdata = new FormGroup({
            commentValue: new FormControl("", Validators.compose([
                Validators.required,
                Validators.minLength(1)
            ]))
        });
        this.getPost();

  }
 onClickSubmit(commentData) {
    commentData.postId = this.Post.id;
    let result = this._blogService.postComment(commentData);
        result.subscribe((data) => {
            if (data.success === "true"){
                this.formdata.reset();
                this.getPost();
            }
        },
      (errorData) => {

      });
  }
  getPost() {
    var result = this._blogService.getPost(this.Post.id);
    result.subscribe((data) => {
        this.PostData = data;
        this.Comments = data[0].comments;
    });
  }
  closeViewPostModal() {
        this.activeModal.close();
  }

}
