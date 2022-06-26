import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ANDB_ASSIGN_FEATURE_NAME } from '../const';
import { EffectsModule } from '@ngrx/effects';
import { AssignAndbReducer } from './store/assign-andb.reducer';
import { AssignAndbEffects } from './store/assign-andb.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      ANDB_ASSIGN_FEATURE_NAME, 
      AssignAndbReducer
      ),
    EffectsModule.forFeature([
      AssignAndbEffects
    ])
]
})
export class AssignAndbModule { }
