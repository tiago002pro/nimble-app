import { Component, Input, OnInit } from '@angular/core';
import { PersonAddress } from '../../interface/person.address.interface';
import { Person } from '../../interface/person.interface';

@Component({
  selector: 'app-nb-person-location',
  templateUrl: './nb-person-location.component.html',
  styleUrls: ['./nb-person-location.component.scss']
})
export class NbPersonLocationComponent implements OnInit {
  @Input() entity!: Person
  @Input() address!: PersonAddress

  constructor() { }

  ngOnInit(): void {
  }

  reciveZipCode(value: String) {
    this.address.zipCode = value
  }

  recivePremisse(value: String) {
    this.address.premisse = value
  }

  reciveNumber(value: String) {
    this.address.number = value
  }

  reciveNeighbourhood(value: String) {
    this.address.neighbourhood = value
  }

  reciveLocation(value: String) {
    this.address.location = value
  }

  reciveState(value: String) {
    this.address.state = value
  }

  reciveInformation(value: String) {
    this.address.information = value
  }

  reciveCountry(value: String) {
    this.address.country = value
  }
}
