import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/guards/leave-page.guard';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

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
  edit = false;

  constructor(
    private readonly productsService: ProductsService,
    private readonly titleService: Title,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {}

  canDeactivate() {
    return this.saved || confirm('Do you want to leave this page?. Changes can be lost');
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        if(data['product']) {
          this.edit = true;
          this.newProduct = data['product'];
          this.newProduct.available = this.newProduct.available.substring(0,10);
        } else {
          this.edit = false;
          this.resetProduct();
        }
      }
    );
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
    let save$: Observable<Product>;
    if(this.edit) {
      save$ = this.productsService.editProduct(this.newProduct);
    } else {
      save$ = this.productsService.addProduct(this.newProduct);
    }

    save$.subscribe((product) => {
      this.saved = true;
      if(this.edit) {
        this.router.navigate(['/products', product.id]);
      } else {
        this.router.navigate(['/products']);
      }
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
