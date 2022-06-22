import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'andb',
        loadChildren: () => import('./andb/andb.module')
        .then(module => module.AndbModule)
      },
      {
        path: 'astp',
        loadChildren: () => import('./astp/astp.module')
        .then(module => module.AstpModule)
      },
      {
        path: 'jira',
        loadChildren: () => import('./jira/jira.module')
        .then(module => module.JiraModule)
      },
      {
        path: 'google-docs',
        loadChildren: () => import('./google-docs/google-docs.module')
        .then(module => module.GoogleDocsModule)
      }
    ])
  ]
})
export class SiteModule { }
