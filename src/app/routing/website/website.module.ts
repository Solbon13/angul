import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
          .then(module => module.AuthModule)
      },
      {
        path: 'site',
        loadChildren: () => import('./routing/site/site.module')
          .then(module => module.SiteModule)
      },
      {
        path: 'not-found',
        loadChildren: () => import('./routing/not-found/not-found.module')
          .then(module => module.NotFoundModule)
      },
      { path: '**', redirectTo: 'not-found' },
    ]) 
  ]
})
export class WebsiteModule { }
