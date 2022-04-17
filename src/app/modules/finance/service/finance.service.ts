import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from 'src/app/model/pageable.model';
import { CategoryTitle } from '../interface/category.interface';
import { FinanceTitle } from '../interface/title.interface';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  // url: String = 'https://nimble-back.herokuapp.com' 
  url: String = 'http://localhost:8080'

  constructor(
    private http: HttpClient,
  ) { }

  createTitle(titles: Array<FinanceTitle>)  {
    return this.http.post((this.url) + '/api/title/form', titles)
  }

  getTitlesByType(type: String, page: number, size: number)  {
    return this.http.get<Pageable>((this.url) + '/api/title/history?type='+(type)+'&page='+(page)+'&size='+(size)) 
  }

  getAllCategories() {
    return this.http.get<Array<CategoryTitle>>((this.url) + '/api/category/all')
  }
}