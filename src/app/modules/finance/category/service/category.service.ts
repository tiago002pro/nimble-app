import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryTitle } from '../../interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // url: String = 'https://nimble-back.herokuapp.com' 
  url: String = 'http://localhost:8080'

  constructor(
    private http: HttpClient,
  ) { }

  getAllCategories() {
    return this.http.get<Array<CategoryTitle>>((this.url) + '/api/category/get-all')
  }

  getAllCategoriesByType(type: String) {
    return this.http.get<Array<CategoryTitle>>((this.url) + '/api/category/all?type='+(type))
  }

  getAllSubCategories() {
    return this.http.get<Array<any>>((this.url) + '/api/sub-category/all')
  }

  getAllSubCategoriesByType(type: String) {
    return this.http.get<Array<any>>((this.url) + `/api/sub-category/all?type=`+(type))
  }
}
