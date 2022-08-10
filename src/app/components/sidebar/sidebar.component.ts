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
        icon: "bi bi-person-plus-fill",
        router: "#",
        drop: true,
        sub: [
          {name: "Pessoa", router: "/manage-person"},
          {name: "Clientes", router: "/person-list/client/Clientes"},
          {name: "Fornecedores", router: "/person-list/provider/Fornecedores"},
          {name: "Funcionários", router: "/person-list/employee/Funcionários"},
        ]
      },
      // {
      //   name: "Comercial",
      //   icon: "bi bi-bag-check-fill",
      //   router: "#",
      //   drop: true,
      //   sub: [
      //     {name: "Vendas", router: "#"},
      //     {name: "Order de serviço", router: "#"},
      //     {name: "Estoque", router: "#"},
      //     {name: "Nota", router: "#"},
      //   ]
      // },
      {
        name: "Financeiro",
        icon: "bi bi-piggy-bank-fill",
        router: "#",
        drop: true,
        sub: [
          {name: "Contas", router: "account-list"},
          // {name: "Lançamentos", router: "title-releases/pay"},
          // {name: "Cobrança", router: "#"},
          // {name: "Boleto", router: "#"},
          {name: "Contas a Pagar", router: "finance-history/pay/pagar"},
          {name: "Contas a Receber", router: "finance-history/receive/receber"},
          {name: "Categorias", router: "category-list"},
        ]
      },
      {
        name: "Kanban",
        icon: "bi bi-kanban-fill",
        router: "#",
        drop: true,
        sub: [
          {name: "Quadro", router: "/kanban"},
        ]
      },
      // {
      //   name: "Suporte",
      //   icon: "bi bi-headset",
      //   router: "#",
      //   drop: true,
      //   sub: [
      //     {name: "Atendimento", router: "customer-attention"},
      //   ]
      // },
      // {
      //   name: "Qualidade",
      //   icon: "bi bi-clipboard-fill",
      //   router: "#",
      //   drop: true,
      //   sub: [
      //     {name: "Ordem de serciço", router: "#"},
      //   ]
      // },
      // {
      //   name: "Dev",
      //   icon: "bi bi-laptop",
      //   router: "#",
      //   drop: true,
      //   sub: [
      //     {name: "Tarefas", router: "#"},
      //   ]
      // },
      // {
      //   name: "Relatórios",
      //   icon: "fas fa-chart-pie",
      //   router: "#",
      //   drop: true,
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

  showMenu() {
    this.showMenuIn = !this.showMenuIn
    this.showMenuOut.emit(this.showMenuIn)  
  }
}