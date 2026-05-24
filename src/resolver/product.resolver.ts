import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api.service";
import { filter, Observable, of, take, tap } from "rxjs";
import { select, Store } from "@ngrx/store";
import { IProduct } from "../models/IProducts";
import { ProductState } from "../store/reducers/product.reducers";
import { getProducts } from "../store/actions/product.actions";
import { selectAllProducts } from "../store/selectors/product.selector";

@Injectable({
    providedIn: 'root'
})

export class ProductResolver implements Resolve<any> {

    // private apiServices = inject(ApiService);
    private store = inject(Store<ProductState>);

    // resolve():any {
    //     return this.store.dispatch(getProducts());
    //     // .subscribe((productState:{product:IProduct[]}) => {
    //     //     console.log('hh',productState.product)
    //     // })
    // }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.pipe(
            select(selectAllProducts),
            tap((loaded:any) => {
                this.store.dispatch(getProducts());
            }),
            take(1)
        );
    }
    
}



