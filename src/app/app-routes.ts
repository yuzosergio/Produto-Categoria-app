import {Routes} from '@angular/router'
import { CategoriaViewComponent } from './categoria-view/categoria-view.component';
import { ProdutoViewComponent } from './produto-view/produto-view.component';
import { HomeComponent } from './home/home.component';
export const ROUTES: Routes=[
    {path:'', component: HomeComponent },
    {path:'home', component: HomeComponent },
    {path:'categoria', component: CategoriaViewComponent },
    {path:'produto', component: ProdutoViewComponent }
]