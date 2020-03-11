import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../shared/produto.service';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  allProduto: Produto[];
  constructor(
    public produtoService :ProdutoService
  ) { }

  ngOnInit(){
    this.getAllProduto();
  }

  getAllProduto(){
    this.produtoService.getAllProdutos().subscribe(
      (data: Produto[]) => {
        this.allProduto = data;
      }
    );
  }
  deleteProduto(id:number){
    console.log(id);
    this.produtoService.deleteProdutos(id).subscribe(
    (data:Produto)=>{
      this.getAllProduto();
    }
    );
  }
  edit(prod){
    this.produtoService.currentProduto=Object.assign({},prod)
  }
}
