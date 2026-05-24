import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/IProducts';

export const getProducts = createAction(
    '[Product] get product'
);
export const getProductsSuccess = createAction(
    '[Product] get product success',
    props<{products:IProduct[]}>()
);