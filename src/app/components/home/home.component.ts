import { Component } from '@angular/core';
import { HomeSummaryComponent } from './home-summary/home-summary.component';
import { HomeFeaturedComponent } from './home-featured/home-featured.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeSummaryComponent,
    HomeFeaturedComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  section = "Home";
  total = 0;
}
