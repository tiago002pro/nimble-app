import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../interface/person.interface';

@Component({
  selector: 'app-nb-person-location',
  templateUrl: './nb-person-location.component.html',
  styleUrls: ['./nb-person-location.component.scss']
})
export class NbPersonLocationComponent implements OnInit {
  @Input() entity: Person | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
