import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-all',
  templateUrl: './produto-all.component.html',
  styleUrls: ['./produto-all.component.css']
})
export class ProdutoAllComponent implements OnInit {

  displayedColumns: string[] = ["id", "nome", "preco", "acoes"];

  id_cat: String = "";
  produto: Produto[] = [];

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.produto = resposta;
      console.log(this.produto);
    });
  }

  navegarParaCriarProduto(): void {
    this.router.navigate([`categoria/${this.id_cat}/produto/create`])
  }

}
