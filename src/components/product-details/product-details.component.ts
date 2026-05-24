import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  id: any;
  public apiService = inject(ApiService);
  route: any;

  constructor() { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.id = params.get('id');
      console.log(this.id);
      this.apiService.getProduct(this.id).subscribe((data:any) => {
        this.product = data;
        console.log(this.product);
      })
    });

  }

}
