import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopImageComponent } from './components/top-image/top-image.component';



@NgModule({
  declarations: [ToolbarComponent, MenuComponent, TopImageComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolbarComponent, MenuComponent, TopImageComponent]
})
export class SharedModule { }
