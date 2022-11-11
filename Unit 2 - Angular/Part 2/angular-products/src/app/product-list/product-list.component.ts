import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductFilterPipe],
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
  fileName = '';

  newProduct!: Product;

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

  constructor() {
    this.resetProduct();
  }

  toggleShowImg() {
    this.showImg = !this.showImg;
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
    this.products.push(this.newProduct);
    this.fileName = '';
    this.resetProduct();
  }

  private resetProduct() {
    this.newProduct = {
      description: '',
      available: '',
      imageUrl: '',
      rating: 0,
      price: 0,
    };
  }
}
