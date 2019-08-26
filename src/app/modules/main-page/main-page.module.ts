import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { MainPageComponent } from './containers/main-page/main-page.component';



@NgModule({
  declarations: [MainPageContentComponent, MainPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MainPageContentComponent, MainPageComponent]
})
export class MainPageModule { }
