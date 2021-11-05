import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePageable } from 'src/app/components/shared/model/reponsePageable.model';
import { Person } from '../interface/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url: String = 'https://nimble-back.herokuapp.com/' 
  // url: String = 'http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient,
  ) { }

  createJuridicalPerson(entity: any) {
    return this.http.post((this.url) + '/api/person-juridica/form', entity).subscribe(result => {console.log(result)})
  }

  createIndividual(entity: any)  {
    return this.http.post((this.url) + '/api/person-individual/form', entity).subscribe(result => {console.log(result)})
  }

  updateIndividual(entity: any)  {
    return this.http.put((this.url) + '/api/person-individual/form', entity).subscribe(result => {console.log(result)})
  }

  getPersonListByRule(rule: String, page: number) {
    return this.http.get<ResponsePageable>((this.url) + '/api/person/get/person-list/rule?rule='+(rule)+'&page='+(page)+'&size=10') 
  }

  loadById(id: any) {
    return this.http.get<Person>((this.url) + '/api/person/' + (id))
  }

  deleteById(id: any) {
    this.http.delete((this.url) + '/api/person/delete/' + (id)).subscribe(result => {console.log(result)})
  }
}
