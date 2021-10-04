import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() doc = new EventEmitter()
  @Output() type = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.typePerson = 'pf'
  }

  reciveDocument(value: String) {
    this.document = value
    this.doc.emit(this.document)
    this.type.emit(this.typePerson)
  }

  reciveRg(value: String) {
    this.entity.rg = value
  }

  reciveIe(value: String) {
    this.entity.ie = value
  }

  reciveDate(value: String) {
    this.entity.dateofbirthorfondation = value
  }

  reciveTypePerson(value: String) {
    this.typePerson = value
  }
}
