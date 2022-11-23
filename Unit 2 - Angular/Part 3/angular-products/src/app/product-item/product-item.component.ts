import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';

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

  constructor(private readonly productsService: ProductsService) {}

  setRating(newRating: number) {
    const oldRating = this.product.rating;
    this.product.rating = newRating;
    this.productsService.changeRating(this.product.id!, newRating).subscribe({
      error: error => this.product.rating = oldRating
    });
  }

  delete() {
    this.productsService.deleteProduct(this.product.id!).subscribe({
      next: () => this.deleted.emit(),
      error: error => console.error(error)
    });
  }
}
