import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinanceTitle } from '../interface/title.interface';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  url: String = 'http://localhost:8080'

  constructor(
    private http: HttpClient,
  ) { }

  createTitle(titles: Array<FinanceTitle>)  {
    return this.http.post((this.url) + '/api/title/form', titles)
  }

  getTitlesByType(type: String)  {
    return this.http.get<Array<FinanceTitle>>((this.url) + '/api/title/history?type='+(type))
  }
}