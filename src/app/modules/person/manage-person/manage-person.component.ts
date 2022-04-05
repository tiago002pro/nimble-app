import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-person',
  templateUrl: './manage-person.component.html',
  styleUrls: ['./manage-person.component.scss']
})
export class ManagePersonComponent implements OnInit {
  listPerson = []
  constructor() { }

  ngOnInit(): void {
  }

}
