import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validated: Boolean = false
  login!: String
  password!: String
  @Output() validatedLogin = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  async doLogin() {
    if (this.login == 'Teste' && this.password == 'Teste') {
      this.validated = true

      setTimeout(() => {
        this.validatedLogin.emit(this.validated)
      }, 2000)

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
}