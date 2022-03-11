import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnumTitleType } from '../enum/EnumTitleType';
import { FinanceTitle } from '../interface/title.interface';
import { FinanceService } from '../service/finance.service';

@Component({
  selector: 'app-finance-history',
  templateUrl: './finance-history.component.html',
  styleUrls: ['./finance-history.component.scss']
})
export class FinanceHistoryComponent implements OnInit {
  currentRoute!: any
  type!: string
  titles!: Array<FinanceTitle>

  constructor(
    private route: ActivatedRoute,
    private financeService: FinanceService
  ) {
    this.currentRoute = this.route.snapshot.params.rule
    this.type = this.route.snapshot.params.rule === 'pagar'? EnumTitleType.PAY : EnumTitleType.RECEIVE
  }

  async ngOnInit(): Promise<void> {
    this.titles = await this.financeService.getTitlesByType(this.type).toPromise().then(response => response)
  }
}