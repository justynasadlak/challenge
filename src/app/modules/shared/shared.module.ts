import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from './modules/custom-material/custom-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [CustomMaterialModule, ToolbarComponent]
})
export class SharedModule { }
