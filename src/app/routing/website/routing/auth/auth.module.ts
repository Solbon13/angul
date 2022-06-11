import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginPageComponent } from './pages/auth-login-page/auth-login-page.component';
import { RouterModule } from '@angular/router';
import { AuthLoginBlockModule } from 'src/app/view/auth-login-block/auth-login-block.module';



@NgModule({
  declarations: [
    AuthLoginPageComponent,
  ],
  imports: [
    CommonModule,
    AuthLoginBlockModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: AuthLoginPageComponent
      }
    ])
  ]
})
export class AuthModule { }
