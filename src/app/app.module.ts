import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaComponent} from './components/views/categoria/categoria.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { ProdutoComponent } from './components/views/produto/produto.component';
import { ProdutoCreteComponent } from './components/views/produto/produto-crete/produto-crete.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { ProdutoDaleteComponent } from './components/views/produto/produto-dalete/produto-dalete.component';
import { ProdutoAllComponent } from './components/views/produto/produto-all/produto-all.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    ProdutoComponent,
    ProdutoCreteComponent,
    ProdutoUpdateComponent,
    ProdutoDaleteComponent,
    ProdutoAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule

    
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }