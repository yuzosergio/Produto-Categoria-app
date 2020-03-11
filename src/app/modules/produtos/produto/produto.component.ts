import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../shared/produto.service';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {

  constructor(
    public produtoService: ProdutoService
  ) { }

  ngOnInit() {
  }

  createAndUpdate(currentProduto: Produto) {

    console.log(currentProduto);

    if (currentProduto.id != null) {
      console.log('update');
      this.updateProduto(currentProduto);

    } else {
      console.log('create');
      this.createProduto(currentProduto);
    }

  }

  createProduto(prod: Produto) {
    this.produtoService.createProdutos(prod).subscribe();
  }

  updateProduto(prod: Produto) {
    this.produtoService.updateProdutos(prod).subscribe();
  }

}
