import { Component } from '@angular/core';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainLayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stock-control';
}
