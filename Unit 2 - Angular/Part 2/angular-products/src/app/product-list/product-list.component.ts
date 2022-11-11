import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductFilterPipe,
    ProductFormComponent,
    ProductItemComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  title = "My product's list";
  headers = {
    image: 'Image',
    description: 'Product',
    price: 'Price',
    available: 'Available',
  };
  showImg = true;
  filterSearch = '';

  products: Product[] = [
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4,
    },
    {
      id: 3,
      description: '1TB HDD disk',
      available: '2017-08-12',
      price: 34.95,
      imageUrl: 'assets/hdd.jpg',
      rating: 2,
    },
    {
      id: 4,
      description: '8GB DDR4 RAM',
      available: '2018-11-27',
      price: 45.5,
      imageUrl: 'assets/ram.jpg',
      rating: 3,
    },
  ];

  toggleShowImg() {
    this.showImg = !this.showImg;
  }
}
