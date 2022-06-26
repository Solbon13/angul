import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ANDB_FULL_FEATURE_NAME } from '../const';
import { AndbFullReducer } from './store/andb-full.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AndbFullEffects } from './store/andb-full.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      ANDB_FULL_FEATURE_NAME, 
      AndbFullReducer
      ),
    EffectsModule.forFeature([
      AndbFullEffects
    ])
  ]
})
export class FullAndbModule { }
