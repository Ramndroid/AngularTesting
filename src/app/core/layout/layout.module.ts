import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from './toolbar/toolbar.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarModule,
    FooterModule
  ]
})
export class LayoutModule { }
