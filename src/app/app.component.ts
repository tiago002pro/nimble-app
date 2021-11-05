import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PersonService } from './modules/person/service/person.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showMenu!: Boolean 

  constructor(
  ) {}

  ngOnInit(): void {
  }

  reciveHideMenu(value: String) {
    this.showMenu = value == 'true'
  }
}
