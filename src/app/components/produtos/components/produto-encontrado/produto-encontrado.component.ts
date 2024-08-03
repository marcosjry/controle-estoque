import { Component } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Product } from '../../model/produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-encontrado',
  standalone: true,
  imports: [],
  templateUrl: './produto-encontrado.component.html',
  styleUrl: './produto-encontrado.component.scss'
})
export class ProdutoEncontradoComponent {

  product!: Product

  productId: any;
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute) {

  }
  
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.produtosService.findById(this.productId).subscribe(data => {
      this.product = data;
      console.log(this.product);
    }, error => {
      console.log(error);
    })
  }


}
