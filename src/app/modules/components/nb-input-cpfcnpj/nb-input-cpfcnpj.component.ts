import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-input-cpfcnpj',
  templateUrl: './nb-input-cpfcnpj.component.html',
  styleUrls: ['./nb-input-cpfcnpj.component.scss']
})
export class NbInputCpfcnpjComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value!: String;
  @Input() typePerson!: String

  public cpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  public cnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]


  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: String) {
    console.log("doc", value);
    
    if (value.length == 14) {
      console.log("pj");
      
      this.typePerson = 'pj'
    } else {
      console.log("pf");

      this.typePerson = 'pf'
    }

    console.log("typePerson", this.typePerson);

  }

}
