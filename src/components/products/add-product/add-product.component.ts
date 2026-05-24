import { Component, computed, signal } from '@angular/core';
import { IAddProduct } from '../../../models/IProducts';
@Component({
    selector: 'app-add-product',
    standalone: true,
    imports: [],
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.css'
})
export class AddProductComponent {
    
    public productForm = signal<IAddProduct>({
        category: '',
        description: '',
        price: 0,
        title: '',
        type: '',
        stock: 0,
        brand: '',
        discountedPrice: 0,
        oldPrice: 0
    });

    public isValid = computed(() => {
        const f = this.productForm();
        return (
            f.brand
        )
    })



}
