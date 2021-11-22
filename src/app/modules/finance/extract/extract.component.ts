import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  summary: Array<any> = [{show: Boolean}, {item: Array<any>()}]
  account!: Array<any>

  constructor() { }

  ngOnInit(): void {
    this.summary = [
      {
        id: 'balance',
        show: true, 
        item: [
          {name: "Saldo anterior", value: -200},
          {name: "Entradas", value: 1000},
          {name: "Saídas", value: -600},
          {name: "Saldo do período", value: 200},
          {name: "Saldo atual", value: 200},
        ]
      },
      {
        id: 'account',
        show: true,
        item: [
          {name: "Carteira", url: "https://firebasestorage.googleapis.com/v0/b/nimble-34cd9.appspot.com/o/Carteira.png?alt=media&token=78c29540-7dac-4111-833f-40c4dff7c8c3", value: 1000},
          {name: "Itaú", url: "https://firebasestorage.googleapis.com/v0/b/nimble-34cd9.appspot.com/o/Ita%C3%BA.png?alt=media&token=c4ae695f-97c8-4cd0-b787-00aaf60fbb8d", value: 546},
          {name: "Santander", url: "https://firebasestorage.googleapis.com/v0/b/nimble-34cd9.appspot.com/o/Santander.png?alt=media&token=987c62a6-0753-4830-bb55-b5db482aba9c", value: -569},
        ]
      }
    ]
  }

  showSummary(id: String) {
    this.summary.forEach(item => {
      console.log(item.id);
      if (item.id == id) {
        item.show = !item.show
      }
    })
  }
}
