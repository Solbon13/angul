import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JiraPageComponent } from './pages/jira-page/jira-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    JiraPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JiraPageComponent
      }
    ])
  ]
})
export class JiraModule { }
