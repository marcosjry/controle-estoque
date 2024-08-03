
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../../services/produtos.service';
import { Observable } from 'rxjs';
import { Product } from '../../model/produto';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produtos-search',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIcon,
    RouterLink,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  templateUrl: './produtos-search.component.html',
  styleUrl: './produtos-search.component.scss'
})
export class ProdutosSearchComponent {
  form: FormGroup;
  private product!: Product;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private produtosService: ProdutosService,
    private snackBar: MatSnackBar,
    private router: Router) {
      
    this.form = this.formBuilder.group({
      id: '',
    });
  }
  productId: any;

  onClick() {
    this.productId = this.form.get('id')!.value;
    this.produtosService.findById(this.productId).subscribe(data => {
      if (data) {
        this.router.navigate([`/product/${this.productId}`])
      }
      console.log('Dentro do método',this.product);
    }, error => this.onError());
  }

  private onError() {
    this.snackBar.open('Produto não encontrado.','' ,{ duration: 5000 });
  }

}
