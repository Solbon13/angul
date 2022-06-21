import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { GOOGLE_FEATURE_NAME } from './const';
import { GoogleReducer } from './store/google.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GoogleEffects } from './store/google.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(GOOGLE_FEATURE_NAME, GoogleReducer),
    EffectsModule.forFeature([
      GoogleEffects
    ])
  ]
})
export class GoogleStoreModule { }
