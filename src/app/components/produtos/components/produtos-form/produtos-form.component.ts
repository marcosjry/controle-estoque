import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { Location } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.scss'
})
export class ProdutosFormComponent {

  form: FormGroup;

  constructor(private formBuilder: NonNullableFormBuilder,
    private productService: ProdutosService,
    private location: Location,
    private snackBar: MatSnackBar
  ) {

    this.form = this.formBuilder.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
      img: [''],
    });
  }


  onSubmit() {
    this.productService.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Produto salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao criar produto!', '', { duration: 5000 });
  }
} 
