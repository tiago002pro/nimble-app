import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finance-history',
  templateUrl: './finance-history.component.html',
  styleUrls: ['./finance-history.component.scss']
})
export class FinanceHistoryComponent implements OnInit {
  currentRoute!: any

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.currentRoute = this.route.snapshot.params.rule
  }
}