import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../produto';
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
      tap(data => console.log(data))
    )
  }

  add(product: Product[]) {
    this.list().subscribe(data => product = data);
  }

  save(record: Product) {
    return this.httpClient.post<Product>(this.API, record)
  }

  
}
