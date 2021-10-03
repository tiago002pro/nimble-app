import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from 'src/app/components/shared/model/reponsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url: String = 'http://localhost:8080'
  urlProd = 'https://nimble-backend.herokuapp.com' 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient,
  ) { }

  createJuridicalPerson(entity: any) {
    return this.http.post(`${this.url}/api/person-juridica/form`, entity)
  }

  createIndividual(entity: any)  {
    return this.http.post(`${this.url}/api/person-individual/form`, entity)
  }

  getPersonList(page: any) {
    return this.http.get(`${this.url}/api/person/get/person-list/?page=${page}&size=10`)
  }

  getPersonListByRule(rule: String, page: number) {
    return this.http.get<ResponsePageable>((this.urlProd) + '/api/person/get/person-list/rule?rule='+(rule)+'&page='+(page)+'&size=10') 
  }

  // getPersonListByRule(rule: any, page: any): Observable<ResponsePageable> {
  //   const teste =  this.http.get<ResponsePageable>((this.urlProd) + '/api/person/get/person-list/rule?rule='+(rule)+'&page='+(page)+'&size=10') 

  //   console.log('TESTE', teste);
  //   return teste;
    
  // }

  loadById(id: any) {
    return this.http.get(`${this.url}/api/person/${id}`)
  }

  deleteById(id: any) {
    this.http.delete(`${this.url}/api/person/delete/${id}`)
  }
}
