import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstpPageComponent } from './pages/astp-page/astp-page.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
    NzFormModule,
    ReactiveFormsModule,
    NzTypographyModule,
    NzButtonModule
  ]
})
export class AstpModule { }
