import { Observable } from 'rxjs';

import { Component, Input } from '@angular/core';

import { Product } from '../../model/produto';
import { ProdutosService } from '../../services/produtos.service';

import { MatTableModule } from '@angular/material/table';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-produtos-table-list',
  standalone: true,
  imports: [
    MatTableModule,
    NgIf,
    AsyncPipe,
    MatIcon,
    RouterLink
  ],
  templateUrl: './produtos-table-list.component.html',
  styleUrl: './produtos-table-list.component.scss'
})


export class ProdutosTableListComponent {
  @Input() product!: Observable<Product[]>;

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  columnsToDisplay = ['id', 'name', 'description','price','quantity', 'totalValue', 'edit' ];

  onEdit(id: string) {
    this.router.navigate([`/product/${id}`]);
  }
}
