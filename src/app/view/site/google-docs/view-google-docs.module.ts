import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGoogleDocsComponent } from './ui/table-google-docs/table-google-docs.component';
import { NzTableModule } from 'ng-zorro-antd/table';



@NgModule({
  declarations: [
    TableGoogleDocsComponent,
  ],
  imports: [
    CommonModule,
    NzTableModule,
  ],
  exports: [
    TableGoogleDocsComponent
  ]
})
export class ViewGoogleDocsModule { }
