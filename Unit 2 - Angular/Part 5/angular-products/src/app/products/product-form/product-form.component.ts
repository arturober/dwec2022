import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/guards/leave-page.guard';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { MinDateDirective } from 'src/app/shared/validators/min-date.directive';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MinDateDirective],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, CanDeactivateComponent {
  newProduct!: Product;
  saved = false;
  edit = false;
  @ViewChild('productForm') productForm!: NgForm;

  constructor(
    private readonly productsService: ProductsService,
    private readonly titleService: Title,
    private readonly router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  canDeactivate() {
    if (this.saved || this.productForm.pristine) return true;

    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Changes not saved';
    modalRef.componentInstance.body = 'Do you want to leave the page?';
    return modalRef.result.catch(e => false);
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data['product']) {
        this.edit = true;
        this.newProduct = data['product'];
        this.newProduct.available = this.newProduct.available.substring(0, 10);
      } else {
        this.edit = false;
        this.resetProduct();
      }
    });
    this.titleService.setTitle('Add Product | Angular Products');
  }

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) return;
    if (!fileInput.files[0].type.startsWith('image')) {
      fileInput.files = new DataTransfer().files;
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  addProduct() {
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

  private resetProduct() {
    this.newProduct = {
      description: '',
      available: '',
      imageUrl: '',
      rating: 1,
      price: 0,
    };
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }
}
