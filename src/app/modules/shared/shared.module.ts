import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from './modules/custom-material/custom-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopImageComponent } from './components/top-image/top-image.component';



@NgModule({
  declarations: [ToolbarComponent, MenuComponent, TopImageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [CustomMaterialModule, ToolbarComponent, MenuComponent, TopImageComponent]
})
export class SharedModule { }
