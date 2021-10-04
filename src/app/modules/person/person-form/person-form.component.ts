import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonAddress } from '../interface/person.address.interface';
import { PersonEmail } from '../interface/person.email.interface';
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
  
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    console.log("route", this.route);
    this.rule = this.route.snapshot.params.rule
    
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
        this.personService.createIndividual(this.entity)
      } else {
        this.personService.createJuridicalPerson(this.entity)
      }
      // swal({
      //   title: "Cadastro realizado com sucesso!",
      //   icon: "success",
      // });
      history.back()
      location.reload()
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
}
