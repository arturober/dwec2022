import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ProductsResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly PRODUCTS_URL = 'http://arturober.com:5001/productsr';

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsResponse>(this.PRODUCTS_URL).pipe(
      map((r) => r.products),
      catchError((resp: HttpErrorResponse) => throwError(() => `Error getting products. Status: ${resp.status}. Message: ${resp.message}`))
    );
  }
}
