import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsePageable } from 'src/app/components/shared/model/reponsePageable.model';
import Swal from 'sweetalert2';
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
  list!: ResponsePageable
  ruleTitle: any
  totalPages!: any

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
    this.list = await this.personService.getPersonListByRule(this.rule, page).toPromise().then(response => response)
    this.listPerson = this.list.content
    this.totalPages = Array(this.list.totalPages).map((x,i)=>i);
  }

  deletePersonById(id: any) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Você não será capaz de reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.personService.deleteById(id)
        Swal.fire(
          'Excluído!',
          'Cadastro deletado com sucesso.',
          'success'
        )
        setTimeout(() => {
          location.reload()
        }, 500)
      }
    })
  }
}
