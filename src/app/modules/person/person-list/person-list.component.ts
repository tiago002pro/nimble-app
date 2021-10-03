import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsePageable } from 'src/app/components/shared/model/reponsePageable.model';
import { Person } from '../interface/person.interface';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  rule!: String;
  listPerson: any
  list: any
  ruleTitle: any

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
  ) { }

  async ngOnInit() {
    this.rule = this.route.snapshot.params.rule
    this.getListPerson(0)

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
  }

  async getListPerson(page: number) {
    this.list = await this.personService.getPersonListByRule(this.rule, 0).toPromise().then(response => response)
    this.listPerson = this.list.content
  }

  deletePersonById(id: any) {
    this.personService.deleteById(id)
    location.reload()
  }

}
