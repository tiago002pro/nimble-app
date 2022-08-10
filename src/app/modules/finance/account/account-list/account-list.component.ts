import { Account } from '../../interface/account.interface';
import { AccountService } from '../service/account.service';
import { Component, OnInit } from '@angular/core';
import { SwalModalService } from 'src/app/service/swal-modal.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accountsList: Array<Account> = []
  data
  totalPages

  constructor(
    private accountService: AccountService,
    private swalModalService: SwalModalService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.getAccountList(0)
  }

  async getAccountList(page: number) {
    this.data = await this.accountService.getAccountList(page, 10).toPromise().then(response => response)
    this.accountsList = this.data.content
    this.totalPages = Array(this.data.totalPages).map((x,i)=>i);
  }

  getAccountListPagination(page: number) {
    this.getAccountList(page)
  }
}