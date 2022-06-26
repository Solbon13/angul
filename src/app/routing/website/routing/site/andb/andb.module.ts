import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndbFullPageComponent } from './pages/andb-full-page/andb-full-page.component';
import { RouterModule } from '@angular/router';
import { ViewAndbModule } from 'src/app/view/site/andb/view.andb.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AndbFullPageComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzTabsModule,
    NzFormModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AndbFullPageComponent,
      }
    ]),
    ViewAndbModule
  ]
})
export class AndbModule { }
