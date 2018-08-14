import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  providers: [BlogService]
})
export class CreatePostComponent implements OnInit {

  constructor(public _blogService: BlogService, public activeModal: NgbActiveModal) {}
  postTitle: string;
  postBody;
  formdata;
  @Input() blogId;


  ngOnInit() {
      this.formdata = new FormGroup({
         postTitle: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(1)
         ])),
         postBody: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(1)
         ])),
         postSummary: new FormControl("")
 
      });

  }

  closeCreatePostModal()
  {
    this.activeModal.close();
  }


  onClickSubmit(postData) {
    postData.blogId = this.blogId;
    let result = this._blogService.postNew(postData);
        result.subscribe((data) => {
            if (data.success === "true"){
                setTimeout (() => {
                    this.activeModal.close("refresh");
                }, 1000);
            } else {

            }
        },
      (errorData) => {

      });
  }

}