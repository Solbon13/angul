import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleDocsPageComponent } from './pages/google-docs-page/google-docs-page.component';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ViewGoogleDocsModule } from 'src/app/view/site/google-docs/view-google-docs.module';
import { GoogleDocsFilterAstpPageComponent } from './pages/google-docs-filter-astp-page/google-docs-filter-astp-page.component';



@NgModule({
  declarations: [
    GoogleDocsPageComponent,
    GoogleDocsFilterAstpPageComponent
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
      },
      {
        path: 'filter-astp',
        component: GoogleDocsFilterAstpPageComponent
      }
    ]),
    ViewGoogleDocsModule
  ]
})
export class GoogleDocsModule { }
