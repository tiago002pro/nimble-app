import { FinanceTitle } from './../../interface/title.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from 'src/app/model/pageable.model';
import { CategoryTitle } from '../../interface/category.interface';

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

  createCategory(category: CategoryTitle) {
    return this.http.post((this.url) + '/api/category/category-form', category)
  }

  getTitlesByType(type: String, page: number, size: number)  {
    return this.http.get<Pageable>((this.url) + '/api/title/history?type='+(type)+'&page='+(page)+'&size='+(size)) 
  }

  getAllCategoriesByType(type: String) {
    return this.http.get<Array<CategoryTitle>>((this.url) + '/api/category/all?type='+(type))
  }

  getAllSubCategoriesByType(type: String) {
    return this.http.get<Array<any>>((this.url) + `/api/sub-category/all?type=`+(type))
  }
  
  paidTitle(titles) {
    return this.http.put((this.url) + '/api/title/paid', titles)
  }
}