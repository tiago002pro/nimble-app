import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  // url: String = 'https://nimble-back.herokuapp.com' 
  url: String = 'http://localhost:8080'

  constructor(
    private http: HttpClient,
  ) { }

  getAllSubCategories() {
    return this.http.get<Array<any>>((this.url) + '/api/sub-category/all')
  }

  getAllSubCategoriesByType(type: String) {
    return this.http.get<Array<any>>((this.url) + `/api/sub-category/all/type/`+(type))
  }
}
