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
        icon: "bi bi-plus-circle",
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
        icon: "bi bi-cash-coin",
        router: "#",
        drop: false,
        sub: [
          {name: "Extrato", router: "extract"},
          {name: "Contas a Pagar", router: "payment"},
          {name: "Contas a Receber", router: "receivement"},
        ]
      },
      {
        name: "Kanban",
        icon: "bi bi-kanban",
        router: "/kanban",
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