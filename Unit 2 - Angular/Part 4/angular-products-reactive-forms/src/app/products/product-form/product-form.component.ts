import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanDeactivateComponent } from 'src/app/guards/leave-page.guard';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, CanDeactivateComponent {
  fileName = '';
  newProduct: Product = {
    description: '',
    available: '',
    price: 0,
    imageUrl: '',
    rating: 1
  };
  saved = false;
  formProduct!: FormGroup;
  descControl!: FormControl<string>;
  priceControl!: FormControl<0>;
  availControl!: FormControl<string>;
  imageControl!: FormControl<string>;


  constructor(
    private readonly productsService: ProductsService,
    private readonly titleService: Title,
    private readonly router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.descControl = this.fb.control('', [Validators.required, Validators.minLength(5)])
    this.priceControl = this.fb.control(0, [Validators.required, Validators.min(0.1)])
    this.availControl = this.fb.control('', [Validators.required])
    this.imageControl = this.fb.control('', [Validators.required])

    this.formProduct = this.fb.group({
      description: this.descControl,
      price: this.priceControl,
      available: this.availControl,
      image: this.imageControl
    });

    this.titleService.setTitle('Add Product | Angular Products');
  }

  canDeactivate() {
    return this.saved || confirm('Do you want to leave this page?. Changes can be lost');
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

  validClasses(control: FormControl, validClass: string, errorClass: string) {
    return {
      [validClass]: control.touched && control.valid,
      [errorClass]: control.touched && control.invalid,
    };
  }
}
