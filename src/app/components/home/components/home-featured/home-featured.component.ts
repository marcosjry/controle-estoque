
import { Component, Output } from '@angular/core';
import { HomeService } from '../../services/home-service.service';
import { Observable, tap } from 'rxjs';
import { Product } from '../../../produtos/model/produto';
import { NgIf, CommonModule } from '@angular/common';
import { ProdutosTableListComponent } from '../../../../shared/components/produtos-table-list/produtos-table-list.component';

@Component({
  selector: 'app-home-featured',
  standalone: true,
  imports: [
    ProdutosTableListComponent,
    NgIf,
    CommonModule
  ],
  templateUrl: './home-featured.component.html',
  styleUrl: './home-featured.component.scss'
})
export class HomeFeaturedComponent {

  featuredProducts!: Observable<Product[]>;
  @Output() columns = Observable<String[]>;
  nameList: string[] = [];

 constructor(private homeService: HomeService) {
  
  
 }


 ngOnInit() {
  this.homeService.getHomeSummary().subscribe(data => {
    this.nameList = data.mostStockedProducts;
    this.featuredProducts = this.homeService.filterByName(this.nameList);
  })
  }
  
}
  
 



