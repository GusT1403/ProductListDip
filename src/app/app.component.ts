import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectDip2';
  entryMessage = 'Product 1';
  entryMessage2 = 'Product 2';
  entryMessage3 = 'Product 3';
  entryImg = './public/img11.jpg';

  counter = 0;
  
  add(value: number) {
    this.counter += value;
  }
}
