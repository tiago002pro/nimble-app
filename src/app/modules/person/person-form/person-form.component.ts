import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../interface/person.interface';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  entity!: Person
  title = "Clientes"
  rule!: String
  document!: String
  typePerson!: String
  
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    console.log("route", this.route);
    this.rule = this.route.snapshot.params.rule
    
    this.entity = { name: "Tiago Barbosa", cpf: "12930951000149", rg: "12345678", dateofbirthorfondation: "01012020", gender: "Masculino"}
    this.entity.addresses = [{zipCode: "55555555", premisse: "Av Tiradentes", number: "700", neighbourhood: "Centro", location: "Maringá", state: "PR", information: "Mercado Camilo", country: "Brasil"}]
    this.entity.emails = [{email: "tiago@gmail.com"}]
    this.entity.phones = [{phone: "44988041230", phoneType: "Comercial"}]
    this.entity.documents = []
    this.entity.ruleList = [{rule: "Cliente"}]

    // this.entity = {}
    // this.entity.addresses = [{}]
    // this.entity.emails = [{}]
    // this.entity.phones = [{}]
    // this.entity.documents = [{}]
    // this.entity.ruleList = [{}]

    console.log("entityentity", this.entity);
    
  }

  save() {
    console.log("Save", this.entity);
    // try {
    //   this.entity.ruleList = [{rule: this.rule}]
    //   if (this.typePerson == 'pf') {
    //     this.personService.createIndividual(this.entity)
    //   } else {
    //     this.personService.createJuridicalPerson(this.entity)
    //   }
      // swal({
      //   title: "Cadastro realizado com sucesso!",
      //   icon: "success",
      // });
    //   history.back()
      
    // } catch(e) {
    //   console.log("Error Save Person");
    // }
    
  }

  back() {
    history.back()  
  }

  verifyDocument() {
  if (this.document.length == 14) {
    this.entity.cnpj = this.document
  } else {
    this.entity.cpf = this.document
  }
}

}
