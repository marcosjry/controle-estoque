
import { Routes } from "@angular/router";

export const PRODUCT_ROUTES: Routes = [
    {path: '', loadComponent: () => import('./produtos.component').then(c => c.ProdutosComponent)},
    {path: 'new',
        loadComponent: () => import('./components/produtos-form/produtos-form.component').then(c => c.ProdutosFormComponent)},
    {path: ':id',
        loadComponent: () => import('./components/produto-encontrado/produto-encontrado.component').then(c => c.ProdutoEncontradoComponent)}
        
    
]