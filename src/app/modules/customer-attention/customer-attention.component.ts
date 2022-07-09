import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-attention',
  templateUrl: './customer-attention.component.html',
  styleUrls: ['./customer-attention.component.scss']
})
export class CustomerAttentionComponent implements OnInit {

  constructor() { }

  chat = []

  ngOnInit(): void {
    this.chat = [
      {type: 'client', img: null, name: "Cliente Fulano", chat: "Meu sistema não está fazendo cadastro."},
      {type: 'atendente', img: null, name: "Tiago Barbosa", chat: "Criada Ordem de serviço para corrigir o Bug."},
      {type: 'atendente', img: null, name: "Tiago Barbosa", chat: "Finalizada e cliente informado."},
    ]
  }

}
