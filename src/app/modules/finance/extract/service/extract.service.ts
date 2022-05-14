import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from 'src/app/model/pageable.model';

@Injectable({
  providedIn: 'root'
})
export class ExtractService {
  // url: String = 'https://nimble-back.herokuapp.com' 
  url: String = 'http://localhost:8080'

  constructor(
    private http: HttpClient,
  ) { }

  getTitlesByAccountId(accountId: Number, page: number, size: number)  {
    return this.http.get<Pageable>((this.url) + '/api/title/extract?accountId='+(accountId)+'&page='+(page)+'&size='+(size)) 
  }
}