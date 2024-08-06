import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, tap } from 'rxjs';
import { Stock } from '../model/stock';
import { ProdutosService } from '../../produtos/services/produtos.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = '/api/home'
  constructor(
    private httpClient: HttpClient,
    private produtoService: ProdutosService) { }

  nameList: string[] = [];

  getHomeSummary() {
    return this.httpClient.get<Stock>(this.API).pipe(
      first());
  }

  getList() {
    this.getHomeSummary().subscribe(data => {
      this.nameList = data.mostStockedProducts;
      console.log(this.nameList)
    })
  }

  filterByName(listName: string[]) {
    return this.produtoService.list().pipe(
      map(produtos => produtos.filter(produto => {
        return listName.includes(produto.name);
      }))
    )
  }
}
