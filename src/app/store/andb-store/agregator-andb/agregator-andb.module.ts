import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ANDB_AGREGATOR_FEATURE_NAME, ANDB_FULL_FEATURE_NAME } from '../const';
import { EffectsModule } from '@ngrx/effects';
import { AgregatorAndbReducer } from './store/agregator-andb.reducer';
import { AgregatorAndbEffects } from './store/agregator-andb.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      ANDB_AGREGATOR_FEATURE_NAME, 
      AgregatorAndbReducer
      ),
    EffectsModule.forFeature([
      AgregatorAndbEffects
    ])
  ]
})
export class AgregatorAndbModule { }
