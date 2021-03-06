import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ANDB_REG_FEATURE_NAME } from '../const';
import { EffectsModule } from '@ngrx/effects';
import { RegAndbReducer } from './store/reg-andb.reducer';
import { RegAndbEffects } from './store/reg-andb.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      ANDB_REG_FEATURE_NAME, 
      RegAndbReducer
      ),
    EffectsModule.forFeature([
      RegAndbEffects
    ])
]
})
export class RegAndbModule { }
