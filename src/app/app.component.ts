import { Component } from '@angular/core';
import { CategoriaService } from './modules/shared/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoriaService]
})
export class AppComponent {
  title = 'Produto-Categoria-app';
}
