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
    selector: 'app-about',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

    studentForm!: FormGroup;
    apiService = inject(ApiService);
    countNo = computed(() => this.apiService.count());
    
    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.formCreation();
    }

    formCreation() {
        this.studentForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            address: this.fb.group({
                street: [''],
                zip: ['']
            })
        })
    }

    formSubmit() {
        console.log(this.studentForm.valid)
        if(this.studentForm.valid){
            console.log(this.studentForm.value)
        }
    }
}




