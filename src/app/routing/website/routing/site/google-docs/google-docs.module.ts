import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleDocsPageComponent } from './pages/google-docs-page/google-docs-page.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    GoogleDocsPageComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: GoogleDocsPageComponent
      }
    ])
  ]
})
export class GoogleDocsModule { }
