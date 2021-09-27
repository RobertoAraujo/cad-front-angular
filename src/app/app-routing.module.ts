import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/views/categoria/categoria.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
 { 
   path: '',
   component: HomeComponent
 },
 {
  path: 'categoria',
  component: CategoriaComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
