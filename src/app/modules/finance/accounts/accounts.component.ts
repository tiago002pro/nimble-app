import { Component, OnInit } from '@angular/core';
import { SwalModalService } from 'src/app/service/swal-modal.service';
import { Account } from './interface/account.interface';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accountsList: Array<Account> = []

  constructor(
    private accountService: AccountService,
    private swalModalService: SwalModalService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.accountsList = (await this.accountService.getAccountList(0, 10).toPromise().then(response => response)).content
  }
}
