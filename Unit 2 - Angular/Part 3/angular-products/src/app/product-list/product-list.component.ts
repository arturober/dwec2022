import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductFilterPipe,
    ProductFormComponent,
    ProductItemComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title = "My product's list";
  headers = {
    image: 'Image',
    description: 'Product',
    price: 'Price',
    available: 'Available',
  };
  showImg = true;
  filterSearch = '';

  products: Product[] = [];
  subscription!: Subscription

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: products => this.products = products,
      error: error => console.log(error),
      complete: () => console.log('Products loading complete!')
    });
  }

  toggleShowImg() {
    this.showImg = !this.showImg;
  }

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }
}
