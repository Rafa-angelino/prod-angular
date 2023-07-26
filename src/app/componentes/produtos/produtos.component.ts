import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/modelos/produto';
import { ProdutoServiceService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoServiceService){}

  ngOnInit(): void {
    this.produtoService.buscarTodosProdutos().subscribe({
      next:(response) => this.produtos = response,
      error:(error) => console.log(error)
    })
  }



}
