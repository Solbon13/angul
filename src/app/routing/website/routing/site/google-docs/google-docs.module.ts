import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleDocsPageComponent } from './pages/google-docs-page/google-docs-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GoogleDocsPageComponent
  ],
  imports: [
    CommonModule,
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
