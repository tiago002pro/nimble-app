import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePageable } from 'src/app/components/shared/model/reponsePageable.model';
import { Person } from '../interface/person.interface';

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
    return this.http.post((this.urlProd) + '/api/person-juridica/form', entity).subscribe(result => {console.log(result)})
  }

  createIndividual(entity: any)  {
    return this.http.post((this.urlProd) + '/api/person-individual/form', entity).subscribe(result => {console.log(result)})
  }

  getPersonList(page: any) {
    return this.http.get(`${this.url}/api/person/get/person-list/?page=${page}&size=10`)
  }

  getPersonListByRule(rule: String, page: number) {
    return this.http.get<ResponsePageable>((this.urlProd) + '/api/person/get/person-list/rule?rule='+(rule)+'&page='+(page)+'&size=10') 
  }

  loadById(id: any) {
    return this.http.get<Person>((this.urlProd) + '/api/person/' + (id))
  }

  deleteById(id: any) {
    this.http.delete((this.urlProd) + '/api/person/delete/' + (id)).subscribe(result => {console.log(result)})
  }
}
