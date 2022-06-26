import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ANDB_STATEMENT_LINK_FEATURE_NAME } from '../const';
import { EffectsModule } from '@ngrx/effects';
import { StatementLinkAndbReducer } from './store/statement-link-andb.reducer';
import { StatementLinkAndbEffects } from './store/statement-link-andb.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      ANDB_STATEMENT_LINK_FEATURE_NAME, 
      StatementLinkAndbReducer
      ),
    EffectsModule.forFeature([
      StatementLinkAndbEffects
    ])
]
})
export class StatementLinkAndbModule { }
