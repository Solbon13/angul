import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderBlockComponent } from './blocks/sider-block/sider-block.component';
import { SiderMenuComponent } from './ui/sider-menu/sider-menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SiderBlockComponent,
    SiderMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
    NzIconModule,
  ],
  exports: [
    SiderBlockComponent
  ]
})
export class SiderBlockModule { }
