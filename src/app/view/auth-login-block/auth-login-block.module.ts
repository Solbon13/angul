import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginFormUiComponent } from './ui/auth-login-form-ui/auth-login-form-ui.component';
import { AuthLoginBlockComponent } from './blocks/auth-login-block/auth-login-block.component';


import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [
    AuthLoginFormUiComponent,
    AuthLoginBlockComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    NzFormModule,
    NzTypographyModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule
  ],
  exports: [
    AuthLoginBlockComponent
  ]
})
export class AuthLoginBlockModule { }
