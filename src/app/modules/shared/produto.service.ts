import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/model/produto.model';

const headerOption = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}
@Injectable()
export class ProdutoService {

  mockUrl= 'http://localhost:3000/Categoria';

  currentProduto: Produto = {
    id:null,
    titulo:'',
    preco:null,
    descricao:'',
    categoria: null, 
  }
  
  constructor(
    public http: HttpClient
  ) { }

  getAllProdutos():Observable<Produto[]> {
    return this.http.get<Produto[]>(this.mockUrl, headerOption);   
  }

  deleteProdutos(id:number):Observable<Produto>{
    return this.http.delete<Produto>(this.mockUrl + '/' + id, headerOption);
  }

  createProdutos(prod: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.mockUrl,prod,headerOption);
  }

  updateProdutos(prod: Produto): Observable<Produto>{
    return this.http.put<Produto>(this.mockUrl + '/' + prod.id,prod,headerOption);
  }

} 
