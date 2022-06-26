import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FullAndbModule } from './full-andb/full-andb.module';
import { AgregatorAndbModule } from './agregator-andb/agregator-andb.module';
import { AssignAndbModule } from './assign-andb/assign-andb.module';
import { PtkAndbModule } from './ptk-andb/assign-andb.module';
import { RegAndbModule } from './reg-andb/reg-andb.module';
import { StatementLinkAndbModule } from './statement-link-andb/statement-link-andb.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: request => request as any
      }
    }),
    FullAndbModule,
    AgregatorAndbModule,
    AssignAndbModule,
    PtkAndbModule,
    RegAndbModule,
    StatementLinkAndbModule
  ]
})
export class AndbStoreModule { }
