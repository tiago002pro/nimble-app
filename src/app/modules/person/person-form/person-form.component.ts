import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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
  ruleTitle: String = '########'
  
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private ngxService: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
    this.rule = this.route.snapshot.params.rule
    switch(this.rule) {
      case "Clientes": 
        this.ruleTitle = "Cliente"
        break;
      case "Fornecedores": 
        this.ruleTitle = "Fornecedor"
        break
      default:
        this.ruleTitle = "Funcionário"
    }

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

  async save() {
    this.ngxService.startBackground()
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
      this.personService.createIndividual(this.entity).subscribe(
        success => {this.sucessModal(); this.back()},
        error => {this.errorModal()}
      )
    } else {
      this.personService.createJuridicalPerson(this.entity)
    }

    this.ngxService.stop()
    
  }

  sucessModal() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Concluído',
      text: this.ruleTitle + ' cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 2500
    })
  }

  errorModal() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Erro',
      text: 'Verifique os dados e tente novamente.',
      showConfirmButton: false,
      timer: 2500
    })
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
