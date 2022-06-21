import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { TableJiraComponent } from './table-jira.component';


@NgModule({
  declarations: [
    TableJiraComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
  ],
  exports: [
    TableJiraComponent
  ]
})
export class TableJiraModule { }
