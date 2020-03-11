import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaService } from '../shared/categoria.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CategoriaComponent, CategoriaListComponent],
  exports: [CategoriaComponent,CategoriaListComponent],
  providers: [CategoriaService]
})

export class CategoriasModule { }
