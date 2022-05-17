import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})

export class SwalModalService {
  
  constructor() {}

  sucessModal(title, text, showConfirmButton, timer) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: title,
      text: text,
      showConfirmButton: showConfirmButton,
      timer: timer
    })
  }

  errorModal(title, text, showConfirmButton, timer) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: title,
      text: text,
      showConfirmButton: showConfirmButton,
      timer: timer
    })
  }
}