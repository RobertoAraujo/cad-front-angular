import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  id_cat: String = "";

  produto: Produto = {
    id: "",
    nome: "",
    preco: "",
    
  };

  titulo = new FormControl("", [Validators.minLength(3)]);
  nome = new FormControl("", [Validators.minLength(3)]);
  preco = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.produto.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`categoria/${this.id_cat}/produto`]);
  }

  findById(): void {
    this.service.findById(this.produto.id!).subscribe((resposta) => {
      this.produto = resposta
    })
  }

  update():void {
    this.service.update(this.produto).subscribe((resposta) => {
      this.router.navigate([`categoria/${this.id_cat}/produto`]);
      this.service.mensagem('Livro atualizado com sucesso!')
    }, err => {
      this.router.navigate([`categoria/${this.id_cat}/produto`]);
      this.service.mensagem('Falha ao atualizar livro! Tente mais tarde..')
    })
  }

  getMessage() {
    if (this.nome.invalid) {
      return "O campo NOME deve conter entre 3 e 100 carateres";
    }

    if (this.preco.invalid) {
      return "O campo DESCRICAO  deve conter entre 3 e 100 carateres";
    }

    return false;
  }

}
