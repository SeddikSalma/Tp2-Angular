import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { Product } from "./product.model";

type GetProductResponseDto = {
  products: Product[];

}

@Injectable({ providedIn: "root" })
export class ProductService {
  private pageSize = 12;
  private link = "https://dummyjson.com/products"

  productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable()

  constructor(private httpClient: HttpClient) {
    this.getProducts().pipe(
      tap((result) => {
        this.productsSubject.next(result)
      })
    ).subscribe()
  }

  getProducts(skip: number = 0) {
    return this.httpClient
      .get<GetProductResponseDto>(`${this.link}?limit=${this.pageSize}&skip=${skip}`)
      .pipe(
        map((resp) => {
          return resp.products
        })
      )
  }

  loadMore() {
    return this.getProducts(this.productsSubject.value.length).pipe(
      map((result) => {
        if (result.length == 0) return false;
        this.productsSubject.next([
          ...this.productsSubject.value,
          ...result
        ])
        return true;
      })
    )
  }
}
