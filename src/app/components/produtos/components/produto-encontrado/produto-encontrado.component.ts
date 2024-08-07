import { Component } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Product } from '../../model/produto';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf,  } from '@angular/common';

@Component({
  selector: 'app-produto-encontrado',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './produto-encontrado.component.html',
  styleUrl: './produto-encontrado.component.scss'
})
export class ProdutoEncontradoComponent {

  product!: Observable<Product>;

  productId: any;
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = this.produtosService.findById(this.productId);
    
  }


}
