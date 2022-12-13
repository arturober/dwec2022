import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from 'src/app/shared/star-rating/star-rating.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() showImg!: boolean;
  @Output() deleted = new EventEmitter<void>();

  constructor(
    private readonly productsService: ProductsService,
    private modalService: NgbModal
  ) {}

  setRating(newRating: number) {
    const oldRating = this.product.rating;
    this.product.rating = newRating;
    this.productsService.changeRating(this.product.id!, newRating).subscribe({
      error: (error) => (this.product.rating = oldRating),
    });
  }

  async delete() {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Delete product';
    modalRef.componentInstance.body = 'Are you sure?';
    const resp = await modalRef.result.catch((e) => false);

    if (resp) {
      this.productsService.deleteProduct(this.product.id!).subscribe({
        next: () => this.deleted.emit(),
        error: (error) => console.error(error),
      });
    }
  }
}
