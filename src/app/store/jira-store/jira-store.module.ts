import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { JiraReducer } from './store/jira.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { JiraEffects } from './store/jira.effects';
import { JIRA_FEATURE_NAME } from './const';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(JIRA_FEATURE_NAME, JiraReducer),
    EffectsModule.forFeature([
      JiraEffects
    ])
  ]
})
export class JiraStoreModule { }
