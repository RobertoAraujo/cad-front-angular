import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaComponent } from './components/views/categoria/categoria.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { ProdutoComponent } from './components/views/produto/produto.component';
import { ProdutoCreteComponent } from './components/views/produto/produto-crete/produto-crete.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { ProdutoDaleteComponent } from './components/views/produto/produto-dalete/produto-dalete.component';

const routes: Routes = [
 { 
   path: '',
   component: HomeComponent
 },
 {
  path: 'categoria',
  component: CategoriaComponent
 },
 {
  path: 'categoria/create',
  component: CategoriaCreateComponent
},
{
  path: 'categoria/delete/:id',
  component: CategoriaDeleteComponent
},
{
  path: 'categoria/update/:id',
  component: CategoriaUpdateComponent
},
{
  path: 'categoria/:id_cat/produto',
  component: ProdutoComponent
},
{
  path: 'categoria/:id_cat/produto/create',
  component: ProdutoCreteComponent
},
{
  path: 'categoria/:id_cat/produto/:id/update',
  component: ProdutoUpdateComponent
},
{
  path: 'categoria/:id_cat/produto/:id/delete',
  component: ProdutoDaleteComponent
},
{
  path: 'categoria/:id_cat/produto/:id',
  component: ProdutoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
