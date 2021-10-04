import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonEmail } from '../../interface/person.email.interface';
import { Person } from '../../interface/person.interface';
import { PersonPhone } from '../../interface/person.phone.interface';

@Component({
  selector: 'app-nb-person-data',
  templateUrl: './nb-person-data.component.html',
  styleUrls: ['./nb-person-data.component.scss']
})
export class NbPersonDataComponent implements OnInit {
  @Input() entity!: Person
  @Input() phone!: PersonPhone
  @Input() email!: PersonEmail
  @Input() typePerson!: String
  @Output() ngModel = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  reciveName(value: String) {
    this.entity.name = value
  }

  reciveShortName(value: String) {
    this.entity.shortName = value
  }

  reciveGender(value: String) {
    this.entity.gender = value
  }

  reciveEmail(value: String) {
    this.email.email = value
  }

  recivePhoneType(value: String) {
    this.phone.phoneType = value
  }

  recivePhone(value: String) {
    this.phone.phone = value
  }
}
