import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DATA } from '../assets/data';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dipProject';
  productData = DATA;
}
