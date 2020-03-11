import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routes';
import { CategoriaViewComponent } from './categoria-view/categoria-view.component';
import { ProdutoViewComponent } from './produto-view/produto-view.component';
import { HomeComponent } from './home/home.component';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaViewComponent,
    ProdutoViewComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    CategoriasModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
