import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() showImg!: boolean;

  setRating(newRating: number) {
    this.product.rating = newRating;
  }
}
