import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/modelos/produto';
import { ProdutoServiceService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {

  produto: Produto = {
    id: 0,
    nome:'',
    preco: 0
  }

  constructor(private produtoService: ProdutoServiceService, private router: Router) {}

  adicionarProduto() {
    this.produtoService.salvarProduto(this.produto).subscribe({
      next: response => this.router.navigate(['produtos'])
    })
  }

}
