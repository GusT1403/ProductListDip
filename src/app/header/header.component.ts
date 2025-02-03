import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartComponent } from '@app/cart/cart.component';

@Component({
  selector: 'app-header',
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
