import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  bankAccounts = []
  constructor() { }

  ngOnInit(): void {
    this.bankAccounts = [
      {
        name: 'Carteira',
        ag: '####',
        account: '#####',
        accountDv: '#',
        bankNumber: '341',
      },
      {
        name: 'Itaú',
        ag: 3788,
        account: 24353,
        accountDv: 7,
        bankNumber: '341',
      },
      {
        name: 'Sicoob',
        ag: 4568,
        account: 984685,
        accountDv: 6,
        bankNumber: '987',
      },
      {
        name: 'Santander',
        ag: 1301,
        account: 13013714,
        accountDv: 8,
        bankNumber: '698',
      },
      {
        name: 'Caixa Econômica',
        ag: 1413,
        account: 9876,
        accountDv: 7,
        bankNumber: '001',
      }
    ]
  }

}
