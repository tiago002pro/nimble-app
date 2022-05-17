import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from 'src/app/model/pageable.model';
import { Account } from '../interface/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // url: String = 'https://nimble-back.herokuapp.com' 
  url: String = 'http://localhost:8080'

  constructor(
    private http: HttpClient,
  ) { }

  createAccount(account: Account)  {
    return this.http.post((this.url) + '/api/account/form', account)
  }

  getAccountList(page: number, size: number)  {
    return this.http.get<Pageable>((this.url) + '/api/account/list?page='+(page)+'&size='+(size)) 
  }

  getById(id) {
    return this.http.get<Account>((this.url) +'/api/account/' + (id))
  }
}