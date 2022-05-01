import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItem : Array<any> = []
  @Input() showMenuIn!: Boolean
  @Output() showMenuOut = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.sidebarItem = [
      // {
      //   name: "Dashboard",
      //   icon: "bi bi-grid-1x2-fill",
      //   router: "",
      //   drop: false,
      //   sub: []
      // },
      // {
      //   name: "Cadastross",
      //   icon: "bi bi-person-fill",
      //   router: "manage-person",
      //   drop: false,
      //   sub: []
      // },
      // {
      //   name: "Lançamentoss",
      //   icon: "bi bi-person-fill",
      //   router: "finance-releases",
      //   drop: false,
      //   sub: []
      // },
      {
        name: "Cadastros",
        icon: "bi bi-plus-circle",
        router: "#",
        drop: true,
        sub: [
          {name: "Clientes", router: "/person-list/client/Clientes"},
          {name: "Fornecedores", router: "/person-list/provider/Fornecedores"},
          {name: "Funcionários", router: "/person-list/employee/Funcionários"},
        ]
      },
      {
        name: "Financeiro",
        icon: "bi bi-coin",
        router: "#",
        drop: true,
        sub: [
          {name: "Contas", router: "account-list"},
          {name: "Lançamentos", router: "title-releases/pay"},
          {name: "Contas a Pagar", router: "finance-history/pay/pagar"},
          {name: "Contas a Receber", router: "finance-history/receive/receber"},
          {name: "Extrato", router: "account-extract"},
        ]
      },
      {
        name: "Kanban",
        icon: "bi bi-kanban",
        router: "#",
        drop: true,
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
      //     {name: "Quadro", router: "/report"},
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

  showMenu() {
    this.showMenuIn = !this.showMenuIn
    this.showMenuOut.emit(this.showMenuIn)  
  }
}