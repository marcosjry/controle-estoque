import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './produtos-header.component.html',
  styleUrl: './produtos-header.component.scss'
})
export class ProdutosHeaderComponent {

  title = "Produtos";
}
