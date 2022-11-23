import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Output() insert = new EventEmitter<Product>();

  fileName = '';
  newProduct!: Product;

  constructor(
    private readonly productsService: ProductsService,
    private readonly titleService: Title
  ) {}

  ngOnInit(): void {
    this.resetProduct();
    this.titleService.setTitle('Add Product | Angular Products');
  }

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  addProduct() {
    // this.products.push(this.newProduct);
    this.productsService.addProduct(this.newProduct).subscribe((product) => {
      this.insert.emit(product);
      this.fileName = '';
      this.resetProduct();
    });
  }

  private resetProduct() {
    this.newProduct = {
      description: '',
      available: '',
      imageUrl: '',
      rating: 1,
      price: 0,
    };
  }
}
