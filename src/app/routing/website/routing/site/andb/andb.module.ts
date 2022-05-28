import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndbFullPageComponent } from './pages/andb-full-page/andb-full-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AndbFullPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AndbFullPageComponent
      }
    ])
  ]
})
export class AndbModule { }
