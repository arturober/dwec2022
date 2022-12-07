import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/guards/leave-page.guard';
import { minDateValidator } from 'src/app/shared/validators/min-date.validator';
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
    rating: 1,
  };
  saved = false;
  edit = false;
  formProduct!: FormGroup;
  descControl!: FormControl<string>;
  priceControl!: FormControl<number>;
  availControl!: FormControl<string>;
  imageControl!: FormControl<string>;

  constructor(
    private readonly productsService: ProductsService,
    private readonly titleService: Title,
    private readonly router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.descControl = this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.priceControl = this.fb.control(0, [
      Validators.required,
      Validators.min(0.1),
    ]);
    this.availControl = this.fb.control('', [
      Validators.required,
      minDateValidator('2022-01-01'),
    ]);
    this.imageControl = this.fb.control('', [Validators.required]);

    this.formProduct = this.fb.group({
      description: this.descControl,
      price: this.priceControl,
      available: this.availControl,
      image: this.imageControl,
    });

    this.titleService.setTitle('Add Product | Angular Products');
  }

  canDeactivate() {
    return (
      this.saved ||
      this.formProduct.pristine ||
      confirm('Do you want to leave this page?. Changes can be lost')
    );
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
    this.newProduct.description = this.descControl.value;
    this.newProduct.available = this.availControl.value;
    this.newProduct.price = this.priceControl.value;
    let save$: Observable<Product>;
    if (this.edit) {
      save$ = this.productsService.editProduct(this.newProduct);
    } else {
      save$ = this.productsService.addProduct(this.newProduct);
    }

    save$.subscribe((product) => {
      this.saved = true;
      if (this.edit) {
        this.router.navigate(['/products', product.id]);
      } else {
        this.router.navigate(['/products']);
      }
    });
  }

  validClasses(control: FormControl, validClass: string, errorClass: string) {
    return {
      [validClass]: control.touched && control.valid,
      [errorClass]: control.touched && control.invalid,
    };
  }
}
