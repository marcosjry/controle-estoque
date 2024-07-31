import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', pathMatch:'full', redirectTo: 'home'},
    {path: 'home',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)
    },
    {path: 'clientes',
        loadComponent: () => import('./components/clientes/clientes.component').then(c => c.ClientesComponent)
    },
    {path: 'produtos',
        loadComponent: () => import('./components/produtos/produtos.component').then(c => c.ProdutosComponent)
    },
    {path: 'vendas',
        loadComponent: () => import('./components/vendas/vendas.component').then(c => c.VendasComponent)
    },
    {path: 'fornecedores',
        loadComponent: () => import('./components/fornecedores/fornecedores.component').then(c => c.FornecedoresComponent)
    },
    {path: 'compras',
        loadComponent: () => import('./components/compras/compras.component').then(c => c.ComprasComponent)
    }
];
