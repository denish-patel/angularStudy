
import { inject, Injectable } from '@angular/core';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { IProduct } from '../../models/IProducts';
import { ApiService } from '../../services/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from '../actions/product.actions';
import { interval } from 'rxjs';


@Injectable()
export class ProductEffect {

    private apiServices = inject(ApiService);
    private actions$ = inject(Actions);

    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.getProducts),
            switchMap(() =>
                this.apiServices.getAllProducts().pipe(
                    map((res: any) => ProductActions.getProductsSuccess({ products: res.products }))
                )
            )
            // switchMap(() =>
            //     interval(1000).pipe(
            //     )
            // )
        )
    )

}
