import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../models/IProducts";
import * as ProductActions from "../actions/product.actions";



export interface ProductState {
    products: IProduct[];
}

export const initialState:ProductState = {
    products:[],
};

export const productsReducer = createReducer(
    initialState,
    // on(ProductActions.getProducts, state => {
    //     return {
    //         ...state
    //     };
    // }),
    on(ProductActions.getProductsSuccess, (state, { products }) => {
        return {
            ...state,
            products
        };
    }),
)