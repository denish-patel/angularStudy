import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { productsReducer } from '../store/reducers/product.reducers';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ProductEffect } from '../store/effects/product.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideRouter(routes),
        provideHttpClient(),
        provideStore(),
        provideState({ name:'product', reducer:productsReducer }),
        provideEffects([ProductEffect])
        // importProvidersFrom(
        //     StoreModule.forRoot({data: productsReducer}),
        //     EffectsModule.forRoot([ProductEffect])
        // )
    ]
};
