import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Categoria } from './categoria.model';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria[] = [];
  displayedColumns: string[] = ["id", "nome", "descricao", "produto", "acoes"];

  constructor(private service: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.categoria = resposta;
    });
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["categoria/create"])
  }
}
