import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  lastScrollTop = 0;
  isHeaderHidden = false;
  isSearchActive = false;

  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      // Cuộn xuống
      this.isHeaderHidden = true;
    } else {
      // Cuộn lên
      this.isHeaderHidden = false;
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
  }

  onSubmit(form: any): void {
    if (form.valid) {
      // Xử lý dữ liệu form, ví dụ: gửi đến server
      console.log('Form Submitted', this.contact);
      // Reset form nếu cần
      form.resetForm();
    }
  }
}
