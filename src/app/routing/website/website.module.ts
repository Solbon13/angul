import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { GuestGuard } from './guards/guest.guard';
import { AdminGuard } from './guards/admin.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
          canActivate: [GuestGuard]
      },
      {
        path: 'site',
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
