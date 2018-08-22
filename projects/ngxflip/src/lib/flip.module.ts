import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipComponent } from './flip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FlipComponent
  ],
  declarations: [FlipComponent]
})
export class FlipModule {
}
