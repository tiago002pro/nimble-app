import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItem : Array<any> = []
  showdropDowMenu1 = false
  showdropDowMenu2 = false
  showMenu = true;
  @Output() hideMenu = new EventEmitter()
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
          {name: "Contas a pagar", router: ""},
          {name: "Contas a receber", router: ""},
        ]
      },
      {
        name: "Kanban",
        icon: "bi bi-kanban",
        router: "/kanban-board",
        drop: false,
        sub: []
      },
      {
        name: "Relatórios",
        icon: "bi bi-clipboard-data",
        router: "",
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
    ]
  }

  seeMenu() {
    this.showMenu = !this.showMenu
    const menu = this.showMenu.toString()
    this.hideMenu.emit(menu)
    this.sidebarItem.length
  }

  dropDown(name: String) {
    this.sidebarItem.forEach(item => {
      if (item.name == name) {
        console.log(item);
        
        item.drop = !item.drop
      }
    })
  }
}
