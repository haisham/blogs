import { Component } from '@angular/core';
import { BlogService } from './services/blog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BlogService],
})

export class AppComponent {



  constructor() { }
  onLoad() { }

}
