import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  summary!: Array<any>
  account!: Array<any>

  constructor() { }

  ngOnInit(): void {
    this.summary = [
      {name: "Saldo anterior", value: -200},
      {name: "Entradas", value: 1000},
      {name: "Saídas", value: -600},
      {name: "Saldo do período", value: 200},
      {name: "Saldo atual", value: 200},
    ]

    this.account = [
      {name: "Carteira", url: "https://w7.pngwing.com/pngs/528/635/png-transparent-wallet-money-computer-icons-wallet-angle-logo-cash.png", value: 1000},
      {name: "Itaú", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banco_Ita%C3%BA_logo.svg/1011px-Banco_Ita%C3%BA_logo.svg.png", value: 546},
      {name: "Santander", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVh7c9jvGncG8cNXawbyzmmQCScWxdmGGzKfOUjuY1x-Inyf6sVSXSliRw6wc54ECweQ&usqp=CAU", value: -569},
    ]
  }

}
