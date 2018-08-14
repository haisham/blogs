import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { PostsComponent } from './posts/posts.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BlogsComponent,
    ViewPostComponent,
    CreatePostComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING,
    ReactiveFormsModule
  ],
  entryComponents: [ViewPostComponent, CreatePostComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
