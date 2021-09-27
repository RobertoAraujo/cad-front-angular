import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-dalete',
  templateUrl: './produto-dalete.component.html',
  styleUrls: ['./produto-dalete.component.css']
})
export class ProdutoDaleteComponent implements OnInit {

  id_cat: String = "";

  produto: Produto = {
    id: "",
    nome: "",
    preco: "",
  
  };

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

  delete():void {
    this.service.delete(this.produto.id!).subscribe(() => {
      this.router.navigate([`categoria/${this.id_cat}/produto`]);
      this.service.mensagem('Produto deletado com sucesso!')
    }, err => {
      this.router.navigate([`categoria/${this.id_cat}/produto`]);
      this.service.mensagem('Falha ao deletar Produto! Tente mais tarde..')
    })
  }

}
