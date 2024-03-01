import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularShop';
  arrayProduct = [
    { image: '../assets/images/banner1.png', name: 'Product One', status: 'New arrival', price: '$45.00' },
    { image: '../assets/images/banner1.png', name: 'Product One', status: 'New arrival', price: '$45.00' },
    { image: '../assets/images/banner1.png', name: 'Product One', status: 'New arrival', price: '$45.00' },
    { image: '../assets/images/banner1.png', name: 'Product One', status: 'New arrival', price: '$45.00' },
    { image: '../assets/images/banner1.png', name: 'Product One', status: 'New arrival', price: '$45.00' },
  ]
}
