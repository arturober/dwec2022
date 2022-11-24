import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Title } from '@angular/platform-browser';
import { CanDeactivateComponent } from '../guards/leave-page.guard';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, CanDeactivateComponent {
  fileName = '';
  newProduct!: Product;
  saved = false;

  constructor(
    private readonly productsService: ProductsService,
    private readonly titleService: Title,
    private readonly router: Router
  ) {}

  canDeactivate() {
    if(!this.saved) {
      this.newProduct.imageUrl = ''; // The image may be too big for localStorage
      localStorage.setItem("newProduct", JSON.stringify(this.newProduct));
    }
    return this.saved || confirm('Do you want to leave this page?. Changes can be lost');
  }

  ngOnInit(): void {
    const savedProd = localStorage.getItem("newProduct");
    if(savedProd) {
      this.newProduct = JSON.parse(savedProd);
      localStorage.removeItem("newProduct");
    } else {
      this.resetProduct();
    }
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
      this.saved = true;
      this.router.navigate(['/products']);
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
