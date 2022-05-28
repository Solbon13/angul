import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginPageComponent } from './pages/auth-login-page/auth-login-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthLoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
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
