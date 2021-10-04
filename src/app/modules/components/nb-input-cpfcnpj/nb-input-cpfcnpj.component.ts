import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nb-input-cpfcnpj',
  templateUrl: './nb-input-cpfcnpj.component.html',
  styleUrls: ['./nb-input-cpfcnpj.component.scss']
})
export class NbInputCpfcnpjComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value!: String;
  @Input() typePerson!: String
  @Output() ngModel = new EventEmitter()
  @Output() type = new EventEmitter()
  public cpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  public cnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: String) {
    if (value.length == 13) {
      this.typePerson = 'pj'
      this.ngModel.emit(value)
    } else {
      this.typePerson = 'pf'
      this.ngModel.emit(value)
    }
    this.type.emit(this.typePerson)
  }

}
