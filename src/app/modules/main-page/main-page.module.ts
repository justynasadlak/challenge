import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagePostsComponent } from './components/main-page-posts/main-page-posts.component';
import { MainPageComponent } from './containers/main-page/main-page.component';



@NgModule({
  declarations: [MainPagePostsComponent, MainPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MainPagePostsComponent, MainPageComponent]
})
export class MainPageModule { }
