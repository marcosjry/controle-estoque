import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { HomeService } from '../../services/home-service.service';
import { Stock } from '../../model/stock';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-summary',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './home-summary.component.html',
  styleUrl: './home-summary.component.scss'
})
export class HomeSummaryComponent {

  stock: Stock = {
    totalItemsQuantity: 0,
    uniqueItemsQuantity: 0,
    stockTotalValue: 0,
    productQuantityMedia: 0,
    mostStockedProducts: []
  };

  constructor(private homeService: HomeService) {
    
  }

  ngOnInit() {
   this.homeService.getHomeSummary().subscribe( (data) => {
    this.stock = data;
   })
  }

}
