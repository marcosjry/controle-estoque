import { Component } from '@angular/core';
import { ProdutosHeaderComponent } from './components/produtos-header/produtos-header.component';
import { ProdutosSearchComponent } from './components/produtos-search/produtos-search.component';
import { ProdutosTableListComponent } from './components/produtos-table-list/produtos-table-list.component';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    ProdutosHeaderComponent,
    ProdutosSearchComponent,
    ProdutosTableListComponent,
    NgIf,
    CommonModule
],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  constructor () {
    
  }

}
