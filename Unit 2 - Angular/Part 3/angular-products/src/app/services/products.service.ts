import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import { ProductResponse, ProductsResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly PRODUCTS_URL = 'products';

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsResponse>(this.PRODUCTS_URL).pipe(
      map((r) => r.products),
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            `Error getting products. Status: ${resp.status}. Message: ${resp.message}`
        )
      )
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<ProductResponse>(this.PRODUCTS_URL, product)
      .pipe(map((resp) => resp.product));
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.PRODUCTS_URL}/${id}`);
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.http.put<void>(
      `${this.PRODUCTS_URL}/${idProduct}/rating`,
      {rating: rating}
    );
  }
}
