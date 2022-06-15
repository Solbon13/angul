import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { GuestGuard } from './guards/guest.guard';
import { AdminGuard } from './guards/admin.guard';
import { SiteComponent } from './pages/site/site.component';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SiderBlockModule } from 'src/app/view/sider-block/sider-block.module';

@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiderBlockModule,
    
    NzLayoutModule,

    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./routing/home/home.module')
          .then(module => module.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./routing/auth/auth.module')
          .then(module => module.AuthModule),
          canLoad: [GuestGuard],
          canActivate: [GuestGuard],
      },
      {
        path: 'site',
        component: SiteComponent,
        loadChildren: () => import('./routing/site/site.module')
          .then(module => module.SiteModule),
          canLoad: [AdminGuard],
          canActivate: [AdminGuard],
      },
      {
        path: 'not-found',
        loadChildren: () => import('./routing/not-found/not-found.module')
          .then(module => module.NotFoundModule)
      },
      { path: '**', redirectTo: 'not-found' },
    ]),
  ],
  providers: [GuestGuard, AdminGuard]
})
export class WebsiteModule { }
