import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { AdicionarProdutoComponent } from './componentes/adicionar-produto/adicionar-produto.component';

const routes: Routes = [
  {
    path:'', component: ProdutosComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produtos/add', component: AdicionarProdutoComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
