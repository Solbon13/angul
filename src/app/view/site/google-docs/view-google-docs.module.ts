import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGoogleDocsComponent } from './ui/table-google-docs/table-google-docs.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FilterAstpGoogleDocsComponent } from './ui/filter-astp-google-docs/filter-astp-google-docs.component';



@NgModule({
  declarations: [
    TableGoogleDocsComponent,
    FilterAstpGoogleDocsComponent,
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
