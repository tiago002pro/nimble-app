import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../interface/person.interface';

@Component({
  selector: 'app-nb-person-documents',
  templateUrl: './nb-person-documents.component.html',
  styleUrls: ['./nb-person-documents.component.scss']
})
export class NbPersonDocumentsComponent implements OnInit {
  @Input() entity!: Person
  @Input() typePerson!: String
  @Input() document!: String
  constructor() { }

  ngOnInit(): void {
    if (this.entity.cnpj) {
      this.document = this.entity.cnpj
    } else if (this.entity.cpf) {
      this.document = this.entity.cpf
    } else {
      this.document = ''
    }
  }

}
