import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { HeaderComponent } from './header/header.component';
import { DATA } from 'src/assets/data';
import { Model } from './models/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponentComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


  productData = DATA;
  constructor(){}

  getInfo(val: Model.Product) {
    console.log(val);
  }
}
