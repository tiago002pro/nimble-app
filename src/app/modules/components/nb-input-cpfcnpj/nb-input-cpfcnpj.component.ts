import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nb-input-cpfcnpj',
  templateUrl: './nb-input-cpfcnpj.component.html',
  styleUrls: ['./nb-input-cpfcnpj.component.scss']
})
export class NbInputCpfcnpjComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value!: String;
  typePerson: String = 'pf'
  @Output() ngModel = new EventEmitter()
  @Output() type = new EventEmitter()
  withoutCharacters!: String
  
  public cpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  public cnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: String) {
    this.withoutCharacters = value.replace(/[^0-9]/g, '');
    if (this.withoutCharacters.length == 14) {
      this.typePerson = 'pj'
      this.type.emit(this.typePerson)
    } else {
      this.typePerson = 'pf'
      this.type.emit(this.typePerson)
    }
    this.ngModel.emit(this.withoutCharacters)
  }
}
