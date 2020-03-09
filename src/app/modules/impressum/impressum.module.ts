import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressumComponent } from './impressum.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ImpressumComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ImpressumComponent
  ]
})
export class ImpressumModule { }
