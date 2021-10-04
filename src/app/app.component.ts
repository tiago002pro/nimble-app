import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showMenu = true
  validated = false
  login: String = 'Teste'
  password: String = 'Testeee'

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: String) {
    console.log("login", this.login);
    console.log("password", this.password);
    

  }

  doLogin() {
    console.log("login", this.login);
    console.log("password", this.password);
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
          // const b = Swal.getHtmlContainer().querySelector('b')
          // timerInterval = setInterval(() => {
          //   b.textContent = Swal.getTimerLeft()
          // }, 100)
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


}
