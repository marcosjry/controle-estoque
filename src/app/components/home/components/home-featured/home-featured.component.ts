
import { Component } from '@angular/core';
import { HomeService } from '../../services/home-service.service';
import { Observable, tap } from 'rxjs';
import { ProdutosTableListComponent } from '../../../produtos/components/produtos-table-list/produtos-table-list.component';
import { Product } from '../../../produtos/model/produto';

@Component({
  selector: 'app-home-featured',
  standalone: true,
  imports: [
    ProdutosTableListComponent
  ],
  templateUrl: './home-featured.component.html',
  styleUrl: './home-featured.component.scss'
})
export class HomeFeaturedComponent {

  featuredProducts!: Observable<Product[]>;

  nameList: string[] = [];
 constructor(private homeService: HomeService) {
  
  
 }


 ngOnInit() {
  this.homeService.getHomeSummary().subscribe(data => {
    this.nameList = data.mostStockedProducts;
    this.featuredProducts = this.homeService.filterByName(this.nameList);
    console.log(this.nameList)
  })
  }
  
}
  
 



