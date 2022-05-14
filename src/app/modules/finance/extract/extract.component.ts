import { Component, OnInit } from '@angular/core';
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
  balance = 0

  constructor(
    public extractService: ExtractService,
  ) { }

  ngOnInit() {
    this.getTitleList(0)
  }

  async getTitleList(page: number) {
    this.list = await this.extractService.getTitlesByAccountId(1, page, 6).toPromise().then(response => response)
    this.titles = this.list.content
    this.totalPages = Array(this.list.totalPages).map((x,i)=>i);
  }

  getBalance(value) {
    console.log("value", value);
  }
}
