import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstpPageComponent } from './pages/astp-page/astp-page.component';
import { RouterModule } from '@angular/router';

import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    AstpPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AstpPageComponent
      }
    ]),
    NzFormModule
  ]
})
export class AstpModule { }
