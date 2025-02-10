import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-finder',
  imports: [],
  templateUrl: './product-finder.component.html',
  styleUrl: './product-finder.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFinderComponent {
  fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
  });

  onSubmit() {
    console.log('Form Submitted', this.form.value);
  }

}
