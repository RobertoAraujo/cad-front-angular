import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-crete',
  templateUrl: './produto-crete.component.html',
  styleUrls: ['./produto-crete.component.css']
})
export class ProdutoCreteComponent implements OnInit {
  id_cat: String = "";

  produto: Produto = {
    id: "",
    nome: "",
    preco: "",
  };

  nome = new FormControl("", [Validators.minLength(3)]);
  preco = new FormControl("", [Validators.minLength(3)]);

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
  }

  create(): void {
    this.service.create(this.produto, this.id_cat).subscribe((resposta) => {
      this.router.navigate([`categoria/${this.id_cat}/produto`]);
      this.service.mensagem("Produto criado com sucesso!");
    }, err => {
      this.router.navigate([`categoria/${this.id_cat}/produto`]);
      this.service.mensagem("Erro ao criar novo Produto! Tente mais tarde!");
    });
  }

  cancel(): void {
    this.router.navigate([`categoria/${this.id_cat}/produto`]);
  }

  getMessage() {
    if (this.nome.invalid) {
      return "O campo NOME deve conter entre 3 e 100 carateres";
    }

    if (this.preco.invalid) {
      return "O campo PRECO deve conter entre 3 e 100 carateres";
    }

    return false;
  }

}
