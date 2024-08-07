import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { HomeService } from '../../services/home-service.service';
import { Stock } from '../../model/stock';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-summary',
  standalone: true,
  imports: [
    NgIf,
    
  ],
  templateUrl: './home-summary.component.html',
  styleUrl: './home-summary.component.scss'
})
export class HomeSummaryComponent {

  
  stock!: Stock;

  constructor(private homeService: HomeService) {
    
  }

  ngOnInit() {
   this.homeService.getHomeSummary().subscribe( (data) => {
    if(data) {
      this.stock = data;
      if(this.stock.productQuantityMedia === "NaN") {
        this.stock.productQuantityMedia = "0";
      }
    } else {
      this.stock = {
        mostStockedProducts: [],
        productQuantityMedia: "0",
        stockTotalValue: 0,
        totalItemsQuantity: 0,
        uniqueItemsQuantity: 0
      }
    }
   })
  }

}
