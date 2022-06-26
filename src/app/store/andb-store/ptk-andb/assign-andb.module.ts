import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ANDB_PTK_FEATURE_NAME } from '../const';
import { EffectsModule } from '@ngrx/effects';
import { PtkAndbReducer } from './store/ptk-andb.reducer';
import { PtkAndbEffects } from './store/ptk-andb.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      ANDB_PTK_FEATURE_NAME, 
      PtkAndbReducer
      ),
    EffectsModule.forFeature([
      PtkAndbEffects
    ])
]
})
export class PtkAndbModule { }
