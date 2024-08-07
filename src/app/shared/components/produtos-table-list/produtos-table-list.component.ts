import { Observable } from 'rxjs';

import { Component, Input } from '@angular/core';




import { MatTableModule } from '@angular/material/table';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../../components/produtos/model/produto';



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
  @Input() product!: Product[];
  @Input() columnsToDisplay!: string[];
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  

  onEdit(id: string) {
    this.router.navigate([`/product/${id}`]);
  }
}
