import { Component, inject } from '@angular/core';
import { ProductService } from '../cv/services/product.service';
import { tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  toaster: ToastrService = inject(ToastrService)
  productService: ProductService = inject(ProductService);
  products$ = this.productService.products$.pipe()

  loadMore() {
    this.productService.loadMore().pipe(
      tap((result) => {
        if (!result) {
          this.toaster.error("No more products")
        }
      })
    ).subscribe()
  }
}
