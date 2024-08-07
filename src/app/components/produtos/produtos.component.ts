import { ProdutosService } from './services/produtos.service';
import { Component } from '@angular/core';
import { ProdutosHeaderComponent } from './components/produtos-header/produtos-header.component';
import { ProdutosSearchComponent } from './components/produtos-search/produtos-search.component';
import { CommonModule, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from './model/produto';
import { ProdutosTableListComponent } from '../../shared/components/produtos-table-list/produtos-table-list.component';


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

  observableProduct!: Observable<Product[]>;
  columns!: Observable<String[]>;
  constructor (private produtosService: ProdutosService) {
    this.observableProduct = this.produtosService.list();
    
  }

  ngOnInit() {
    this.observableProduct.subscribe(products => console.log(products))
  }
}
