import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pageable } from 'src/app/model/pageable.model';
import { EnumTitleType } from '../enum/EnumTitleType';
import { FinanceTitle } from '../interface/title.interface';
import { FinanceService } from '../service/finance.service';

@Component({
  selector: 'app-finance-history',
  templateUrl: './finance-history.component.html',
  styleUrls: ['./finance-history.component.scss']
})
export class FinanceHistoryComponent implements OnInit {
  list!: Pageable
  currentRoute!: any
  type!: string
  titles!: Array<FinanceTitle>
  totalPages!: any

  constructor(
    private route: ActivatedRoute,
    private financeService: FinanceService
  ) {
    this.currentRoute = this.route.snapshot.params.rule
    this.type = this.route.snapshot.params.rule === 'pagar'? EnumTitleType.PAY : EnumTitleType.RECEIVE
  }

  ngOnInit() {
    this.getTitleList(0)
  }

  async getTitleList(page: number) {
    this.list = await this.financeService.getTitlesByType(this.type.toLocaleLowerCase(), page, 10).toPromise().then(response => response)
    this.titles = this.list.content
    this.totalPages = Array(this.list.totalPages).map((x,i)=>i);
  }

  onChange(value, title) {
    title.selected = !title.selected
    console.log("value", value);
    console.log("title", title);
    console.log("index");
    this.titles.forEach(title => {
      // title.selected = false
    });
    
  }
}