import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ProductState } from '../../store/reducers/product.reducers';
import * as ProductActions from '../../store/actions/product.actions';
import * as ProductSelector from '../../store/selectors/product.selector';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../../models/IProducts';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {

	products$!: any;
	productsSubscribe!: Subscription;
	apiService = inject(ApiService);
	countNo = computed(() => this.apiService.count());

	constructor(
		private route: ActivatedRoute,
		private store: Store<ProductState>,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {
		this.getProducts();
	}

	ngOnDestroy(): void {
		if (this.productsSubscribe) {
			this.productsSubscribe.unsubscribe();
		}
	}

	getProducts() {
		this.productsSubscribe = this.store.pipe(select(ProductSelector.selectAllProducts)).subscribe((res: IProduct[]) => {
			this.products$ = res;
		});
	}


}
