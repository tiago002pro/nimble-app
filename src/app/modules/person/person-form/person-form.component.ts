import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseError } from '@firebase/util';
import Swal from 'sweetalert2';
import { PersonAddress } from '../interface/person.address.interface';
import { Person } from '../interface/person.interface';
import { PersonPhone } from '../interface/person.phone.interface';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  entity!: Person
  phone!: PersonPhone
  email!: any
  address!: PersonAddress
  rule!: String
  document: String = ''
  typePerson: String = 'pf'
  img: String = 'https://firebasestorage.googleapis.com/v0/b/nimble-34cd9.appspot.com/o/EXn0f2IWAAIOLlV.jpg?alt=media&token=7e10012b-4cdf-4856-b541-f3935335b49a'
  
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    this.rule = this.route.snapshot.params.rule

    if (this.route.snapshot.params.id) {
      this.getPersonById(this.route.snapshot.params.id)
    } else {
      this.entity = {}
      this.entity.addresses = [{}]
      this.entity.emails = [{}]
      this.entity.phones = [{}]
      this.entity.documents = [{}]
      this.entity.ruleList = [{}]
  
      this.email = {}
      this.phone = {}
      this.address = {}
    }
  }

  save() {
    if (this.document.length == 11) {
      this.entity.cpf = this.document
    } else {
      this.entity.cnpj = this.document
    }

    this.entity.phones = [this.phone]
    this.entity.emails = [this.email]
    this.entity.addresses = [this.address]
    this.entity.ruleList = [{rule: this.rule}]

    if (this.typePerson == 'pf') {
      this.personService.updateIndividual(this.entity)
    } else {
      this.personService.createJuridicalPerson(this.entity)
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    history.back()
  }

  back() {
    history.back()  
  }

  reciveDocument(value: String) {
    this.document = value
  }

  reciveTypePerson(value: String) {
    this.typePerson = value
  }

  async getPersonById(id: any) {
    this.entity = await this.personService.loadById(id).toPromise().then(response => response)
    if (this.entity.cpf) {
      this.document = this.entity.cpf
    } else if (this.entity.cnpj){
      this.document = this.entity.cnpj
    }
  }
}
