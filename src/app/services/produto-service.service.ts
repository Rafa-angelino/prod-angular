import { Produto } from './../modelos/produto';

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Observable } from 'rxjs';
import { ProdutoRequisicao } from '../modelos/produtoRequisicao';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(private http: HttpClient) { }

  baseUrl: string= "https://localhost:7276"

  buscarTodosProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + '/Produto/buscarTodosProdutos');
  }

  salvarProduto(produto : ProdutoRequisicao) : Observable<ProdutoRequisicao> {
    return this.http.post<Produto>(this.baseUrl + '/Produto/salvarProduto', produto);
  }
}
