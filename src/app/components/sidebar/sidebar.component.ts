import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItem : Array<any> = []
  @Input() showMenuIn!: Boolean
  constructor() { }

  ngOnInit(): void {
    this.sidebarItem = [
      {
        name: "Cadastros",
        icon: "bi bi-plus-circle",
        router: "#",
        drop: false,
        sub: [
          {name: "Cadastros", router: "/manage-person"},
          {name: "Cliente", router: "/person-list/client/Clientes"},
          {name: "Fornecedor", router: "/person-list/provider/Fornecedores"},
          {name: "Funcionário", router: "/person-list/employee/Funcionários"},
        ]
      },
      {
        name: "Financeiro",
        icon: "bi bi-cash-coin",
        router: "#",
        drop: false,
        sub: [
          {name: "Lançamentos", router: "finance-releases"},
          {name: "Contas bancárias", router: "account-list"},
          {name: "Contas a Pagar", router: "finance-history/pay/pagar"},
          {name: "Contas a Receber", router: "finance-history/receive/receber"},
          {name: "Extrato", router: "account-extract"},
        ]
      },
      {
        name: "Kanban",
        icon: "bi bi-kanban",
        router: "#",
        drop: false,
        sub: [
          {name: "Quadro", router: "/kanban"},
        ]
      },
      // {
      //   name: "Relatórios",
      //   icon: "fas fa-chart-pie",
      //   router: "#",
      //   drop: false,
      //   sub: [
      //     {name: "Relatórios", router: "/report"},
      //   ]
      // },
    ]
  }

  dropDown(name: String) {
    this.sidebarItem.forEach(item => {
      if (item.name == name) {
        item.drop = !item.drop
      }
    })
  }
}