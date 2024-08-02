import { Component } from '@angular/core';

import { Product } from './../produto';
import { ProdutosService } from '../services/produtos.service';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-produtos-table-list',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './produtos-table-list.component.html',
  styleUrl: './produtos-table-list.component.scss'
})


export class ProdutosTableListComponent {
  product!: Observable<Product[]>;

constructor(private produtosService: ProdutosService) {

}

ngOnInit(): void {
  this.product = this.produtosService.list();
  console.log(this.product)
}

columnsToDisplay = ['id', 'name', 'description','price','quantity' ];


}
