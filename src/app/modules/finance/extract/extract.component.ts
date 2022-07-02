import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pageable } from 'src/app/model/pageable.model';
import { FinanceTitle } from '../titles/interface/title.interface';
import { ExtractService } from './service/extract.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractEntriesComponent implements OnInit {
  list!: Pageable
  titles!: Array<FinanceTitle>
  totalPages!: any
  balanceList = []

  constructor(
    public extractService: ExtractService,
    public activatedRoute: ActivatedRoute
  ) {
    this.getTitleList(this.activatedRoute.snapshot.params.id, 0)
  }

  ngOnInit() {}

  async getTitleList(accountId, page: number) {
    this.list = await this.extractService.getTitlesByAccountId(accountId, page, 6).toPromise().then(response => response)
    this.titles = this.list.content
    this.getBalance()    
    this.totalPages = Array(this.list.totalPages).map((x,i)=>i);
  }

  getBalance() {
    let balance = 0
    this.titles.forEach(title => {
      balance = (title.type == 'PAY' ? (title.value * -1) : title.value) + balance
      const balanceItem = {id: title.id, value: title.value, type:  title.type, balanceValue: balance}
      this.balanceList.push(balanceItem)
    })
  }

  getBalanceValue(title) {
    return (this.balanceList.filter((balance) => balance.id === title.id))[0]
  }
}
