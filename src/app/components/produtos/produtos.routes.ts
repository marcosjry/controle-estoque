
import { Routes } from "@angular/router";
import { ProdutosFormComponent } from "./produtos-form/produtos-form.component";

export const PRODUCT_ROUTES: Routes = [
    {path: '', loadComponent: () => import('./produtos.component').then(c => c.ProdutosComponent)},
    {path: 'new',
        loadComponent: () => import('./produtos-form/produtos-form.component').then(c => c.ProdutosFormComponent)}
    
]