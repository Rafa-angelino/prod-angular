import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/modelos/produto';
import { ProdutoRequisicao } from 'src/app/modelos/produtoRequisicao';
import { ProdutoServiceService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {

  produto: ProdutoRequisicao  = {
    nome: '',
    preco: 0
  }

  constructor(private produtoService: ProdutoServiceService, private router: Router) {}

  adicionarProduto(form: NgForm) {
    this.produtoService.salvarProduto(this.produto).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['produtos']);
      },
      error: err => console.log(err)

    })
    form.reset();
  }

}
