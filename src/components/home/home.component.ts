import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductState } from '../../store/reducers/product.reducers';
import * as ProductActions from '../../store/actions/product.actions';
import * as ProductSelector from '../../store/selectors/product.selector';
import { FormsModule } from "@angular/forms";
import { Subscription } from 'rxjs';
import { IProduct } from '../../models/IProducts';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    @ViewChild('sampleForm') _formData!: any;
    products$!: any;
    productsSubscribe!: Subscription;
    showData: object = {};
    apiService = inject(ApiService);
    countNo = computed(() => this.apiService.count());

    constructor(
        private store: Store<ProductState>
    ) { }

    ngOnInit(): void {
        this.getProductDropdown();
    }
    
    getProductDropdown(){
        this.productsSubscribe = this.store.pipe(select(ProductSelector.selectAllProducts)).subscribe((res:IProduct[]) => {
            this.products$ = res;
        });
    }

    public formSubmit() {
        if (this._formData.valid) {
            this.showData= this._formData.value;
        }
    }

    ngOnDestroy(): void {
        if(this.productsSubscribe) {
            this.productsSubscribe.unsubscribe();
        }
    }

}
