import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos-search',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIcon,
    RouterLink
  ],
  templateUrl: './produtos-search.component.html',
  styleUrl: './produtos-search.component.scss'
})
export class ProdutosSearchComponent {

}
