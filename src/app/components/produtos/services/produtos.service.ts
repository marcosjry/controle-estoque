import { Product } from './../model/produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/api/product'

  constructor(private httpClient: HttpClient,

  ) { }

  list() {
    return this.httpClient.get<Product[]>(this.API).pipe(
      tap()
    )
  }

  save(record: Product) {
    return this.httpClient.post<Product>(this.API, record)
  }

  findById(id: string) {
    return this.httpClient.get<Product>(`${this.API}/${id}`).pipe(
      tap()
    )
  }

  
}
