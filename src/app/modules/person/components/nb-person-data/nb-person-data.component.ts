import { Component, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../interface/person.interface';

@Component({
  selector: 'app-nb-person-data',
  templateUrl: './nb-person-data.component.html',
  styleUrls: ['./nb-person-data.component.scss']
})
export class NbPersonDataComponent implements OnInit {
  @Input() entity: Person | undefined
  @Input() typePerson!: String

  constructor() { }

  ngOnInit(): void {
    console.log("entity", this.entity);
    console.log(this.entity?.name);
    
  }

}
