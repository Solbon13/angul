import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstpPageComponent } from './pages/astp-page/astp-page.component';
import { RouterModule } from '@angular/router';



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
    ])
  ]
})
export class AstpModule { }
