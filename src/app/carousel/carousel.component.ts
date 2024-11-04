import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    nav: true,
    navText: ['<mat-icon>chevron_left</mat-icon>', '<mat-icon>chevron_right</mat-icon>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  banners = [
    { src: 'assets/img/banner/2880x800-1920x533-1.webp', alt: 'Banner 1' },
    { src: 'assets/img/banner/2880x800-1920x533.webp', alt: 'Banner 2' },
    { src: 'assets/img/banner/AirPods-Pro-2-2880-800-1920x533.jpg', alt: 'Banner 3' },
    // Thêm các banner khác nếu cần
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
