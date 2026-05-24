import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { interval, Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { IProduct } from "../models/IProducts";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    
    count = signal<number>(0);
    private apiUrl = 'https://dummyjson.com/';

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}products?limit=10&skip=0`).pipe(
            map((x:IProduct) => x),
            catchError(error => {
                return of('no data')
            })
        );
    }

    getProduct(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}products/${id}`);
    }

    updateCount() {
        this.count.update((val => val+1));
    }
}



// // src/app/core/api.service.ts
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class ApiService {
//     constructor(private http: HttpClient) { }

//     // A generic method for getting data
//     protected get<T>(path: string): Observable<T> {
//         return this.http.get<T>(path).pipe(catchError(this.handleError));
//     }

//     // A generic method for posting data
//     protected post<T>(path: string, body: any): Observable<T> {
//         return this.http.post<T>(path, body).pipe(catchError(this.handleError));
//     }

//     // ... put, delete methods

//     private handleError(error: any) {
//         // Implement centralized error logging and user-friendly messages
//         console.error('API Error:', error);
//         return throwError(() => new Error('Something went wrong. Please try again.'));
//     }
// }
