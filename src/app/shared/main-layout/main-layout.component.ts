import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    MenuComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
