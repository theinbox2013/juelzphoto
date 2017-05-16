import { NgModule } from '@angular/core';
import { MdToolbarModule,
         MdMenuModule,
         MdIconModule,
         MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule
  ],
  exports: [
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule
  ]
})
export class MaterialModules {}
