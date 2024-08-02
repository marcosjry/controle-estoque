import { Component } from '@angular/core';
import { ProdutosHeaderComponent } from './produtos-header/produtos-header.component';
import { ProdutosSearchComponent } from "./produtos-search/produtos-search.component";
import { ProdutosTableListComponent } from "./produtos-table-list/produtos-table-list.component";





@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    ProdutosHeaderComponent,
    ProdutosSearchComponent,
    ProdutosTableListComponent
],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {


  constructor () {
    
  }

}
