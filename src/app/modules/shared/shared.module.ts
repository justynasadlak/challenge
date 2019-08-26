import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from './modules/custom-material/custom-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [ToolbarComponent, MenuComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [CustomMaterialModule, ToolbarComponent, MenuComponent]
})
export class SharedModule { }
