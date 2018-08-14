import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { BlogsComponent } from './blogs/blogs.component';
import { PostsComponent } from './posts/posts.component'

export const AppRoutes: Routes = [
    { path: 'frontend', component: BlogsComponent },
    { path: 'posts/:blogId', component: PostsComponent },

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
