import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { StarRatingComponent } from '../../shared/star-rating/star-rating.component';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      data => this.product = data['product']
    );
  }

  setRating(newRating: number) {
    const oldRating = this.product.rating;
    this.product.rating = newRating;
    this.productsService.changeRating(this.product.id!, newRating).subscribe({
      error: error => this.product.rating = oldRating
    });
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
