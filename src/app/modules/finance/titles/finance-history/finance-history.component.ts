import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private financeService: FinanceService,
    fb: FormBuilder
  ) {
    this.currentRoute = this.route.snapshot.params.rule
    this.type = this.route.snapshot.params.rule === 'pagar'? EnumTitleType.PAY : EnumTitleType.RECEIVE
    this.form = fb.group({
      selectedTitles:  new FormArray([])
    });
  }

  ngOnInit() {
    this.getTitleList(0)
  }

  async getTitleList(page: number) {
    this.list = await this.financeService.getTitlesByType(this.type.toLocaleLowerCase(), page, 10).toPromise().then(response => response)
    this.titles = this.list.content
    this.totalPages = Array(this.list.totalPages).map((x,i)=>i);
  }

  onChange(event: any) {
    const selectedTitles = (this.form.controls.selectedTitles as FormArray);
    
    if (event.target.checked) {
      selectedTitles.push(new FormControl(event.target.value));
    } else {
      const index = selectedTitles.controls
      .findIndex(x => x.value === event.target.id);
      selectedTitles.removeAt(index);
    }
  }
}