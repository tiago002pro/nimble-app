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
  validated = true
  login!: String
  password!: String

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }

  async doLogin() {
    if (this.login == 'Teste' && this.password == 'Teste') {
      this.validated = true

      let timerInterval: any
      Swal.fire({
        title: 'Carregando...',
        html: 'Por favor aguarde.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O login e senha estão invalidos! Verifique os dados e tente novamente.',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

  reciveHideMenu(value: String) {
    this.showMenu = value == 'true'
  }
}
