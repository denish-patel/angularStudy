import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../reducers/product.reducers";

export const selectProductFeature = createFeatureSelector<ProductState>('product');

export const selectAllProducts = createSelector(selectProductFeature,(state:ProductState) => state.products);