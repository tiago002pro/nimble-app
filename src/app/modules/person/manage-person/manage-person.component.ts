import { Component, OnInit } from '@angular/core';
import { Pageable } from 'src/app/model/pageable.model';
import Swal from 'sweetalert2';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-manage-person',
  templateUrl: './manage-person.component.html',
  styleUrls: ['./manage-person.component.scss']
})
export class ManagePersonComponent implements OnInit {
  rule!: String;
  listPerson: any
  list!: Pageable
  totalPages!: any
  public cpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  public cnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]

  constructor(
    private personService: PersonService,
  ) {}

  ngOnInit(): void {
    this.getListPerson(0, "Clientes")
  }

  async getListPerson(page: number, rule: String) {
    this.rule = rule
    this.list = await this.personService.getPersonListByRule(rule, page, 10).toPromise().then(response => response)
    this.listPerson = this.list.content
    this.totalPages = Array(this.list.totalPages).map((x,i)=>i);
  }

  getListPersonPagination(page: number) {
    this.getListPerson(page, this.rule)
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
        }, 3000)
      }
    })
  }

  insertMask(valeu: String) {
    console.log(valeu);
  }
}
