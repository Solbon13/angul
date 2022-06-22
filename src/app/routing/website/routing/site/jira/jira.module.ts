import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JiraPageComponent } from './pages/jira-page/jira-page.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableJiraModule } from 'src/app/view/site/jira/ui/table-jira/table-jira.module';


@NgModule({
  declarations: [
    JiraPageComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: JiraPageComponent
      }
    ]),
    TableJiraModule
  ]
})
export class JiraModule { }
