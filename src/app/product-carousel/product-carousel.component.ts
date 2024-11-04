import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {
  @Input() category: string = '';
  @Input() id: string = '';

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: true,
    nav: true,
    navText: ['<mat-icon>chevron_left</mat-icon>', '<mat-icon>chevron_right</mat-icon>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  };

  products: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.products = this.getProductsByCategory(this.category);
  }

  getProductsByCategory(category: string): any[] {
    // Thay thế bằng gọi API thực tế hoặc dịch vụ
    const allProducts = [
      {
        id: 1,
        block: 'iphone',
        badge: 'Mới',
        image: 'assets/img/iphone/iphone-15-pro-max.webp',
        name: 'iPhone 15 Pro Max 256GB',
        price: '29.590.000₫',
        oldPrice: '34.990.000₫',
        discount: '-15%',
        description: 'Online giá rẻ quá'
      },
      // Thêm các sản phẩm khác
    ];

    return allProducts.filter(product => product.block === category);
  }

  goToProductDetail(product: any): void {
    this.router.navigate(['/product-detail'], { queryParams: { id: product.id, block: product.block } });
  }

  get categoryName(): string {
    switch (this.category) {
      case 'iphone':
        return 'iPhone';
      case 'mac':
        return 'Mac';
      case 'ipad':
        return 'iPad';
      case 'watch':
        return 'Watch';
      case 'sound':
        return 'Tai nghe, Loa';
      case 'access':
        return 'Phụ kiện';
      default:
        return '';
    }
  }
}
