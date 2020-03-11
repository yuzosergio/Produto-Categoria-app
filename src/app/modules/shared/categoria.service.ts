import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria.model';

const headerOption = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}
@Injectable()
export class CategoriaService {

  mockUrl= 'http://localhost:3000/Produto';

  currentCategoria: Categoria = {
    id:null,
    descricao:'',
  }
  
  constructor(
    public http: HttpClient
  ) { }

  getAllCategoria():Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.mockUrl, headerOption);   
  }

  deleteCategoria(id:number):Observable<Categoria>{
    return this.http.delete<Categoria>(this.mockUrl + '/' + id, headerOption);
  }

  createCategoria(emp: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.mockUrl,emp,headerOption);
  }

  updateCategoria(emp: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(this.mockUrl + '/' + emp.id,emp,headerOption);
  }

} 
