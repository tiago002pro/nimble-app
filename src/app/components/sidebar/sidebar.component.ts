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
        name: "Dashboard",
        icon: "bi bi-grid-1x2-fill",
        router: "",
        drop: false,
        sub: []
      },
      {
        name: "Cadastros",
        icon: "bi bi-plus-circle-fill",
        router: "#",
        drop: false,
        sub: [
          {name: "Cliente", router: "/person-list/client/Clientes"},
          {name: "Fornecedor", router: "/person-list/provider/Fornecedores"},
          {name: "Funcionário", router: "/person-list/employee/Funcionários"},
        ]
      },
      {
        name: "Financeiro",
        icon: "fas fa-money-bill-alt",
        router: "#",
        drop: false,
        sub: [
          {name: "Carteira", router: "#"},
          {name: "Extrato", router: "extract"},
          {name: "Contas a Pagar", router: "payment"},
          {name: "Contas a Receber", router: "receivement"},
        ]
      },
      {
        name: "Kanban",
        icon: "fa fa-table",
        router: "/kanban-board",
        drop: false,
        sub: []
      },
      {
        name: "Relatórios",
        icon: "fas fa-chart-pie",
        router: "/report",
        drop: false,
        sub: []
      },
      {
        name: " Display Card",
        icon: "bi bi-clipboard-data",
        router: "modal-card",
        drop: false,
        sub: []
      },
      {
        name: "Kanban",
        icon: "fa fa-table",
        router: "/kanban",
        drop: false,
        sub: []
      },
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