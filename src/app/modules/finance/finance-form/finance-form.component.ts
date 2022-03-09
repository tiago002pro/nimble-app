import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { Pageable } from 'src/app/model/pageable.model';
import { Person } from '../../person/interface/person.interface';
import { PersonService } from '../../person/service/person.service';
import { FinanceParcel } from '../interface/parcel.interface';
import { FinanceTitle } from '../interface/title.interface';

@Component({
  selector: 'app-finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.scss']
})
export class FinanceFormComponent implements OnInit {
  title: FinanceTitle = {}
  parcels: Array<FinanceParcel> = []
  type!: any
  personList!: Pageable
  numberParcels!: Number
  currentRoute!: any
  backHistory!: any

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
  ) { }

  async ngOnInit() {
    this.currentRoute = this.route.snapshot.params.rule
    this.type = this.route.snapshot.params.rule === 'pagar'? 'pay' : 'receive'
    this.personList = await this.personService.getPersonListByRule('Fornecedores', 1, 100).toPromise().then(response => response)
  }

  save() {
    console.log("title", this.title);
    
  }

  back() {
    history.back()  
  }

  reciveDocNumber(value: any) {
    this.title.docuNumber = value
  }

  reciveEmissionDate(value: any) {
    this.title.emissionDate = value
  }

  recivePerson(value: Person) {
    this.title.person = value
  }

  reciveCategory(value: any) {
    this.title.category = value
  }

  reciveValue(value: any) {
    this.title.value = value
  }

  reciveNumberParcels(value: any) {
    this.numberParcels = value
  }

  reciveDueDate(value: Date) {
    this.title.duoDate = value
    this.createParcels()
  }

  reciveHistoric(value: any) {
    this.title.historic = value
  }

  createParcels() {
    this.parcels = []
    for(let x = 0; x < this.numberParcels; x++) {
      const parcel: FinanceParcel = {}
      parcel.parcel = x+1
      parcel.value = this.title.value

      if (x===0) {
        parcel.duoDate = moment(this.title.duoDate, "YYYY-MM-DD").format();
      } else {
        parcel.duoDate = moment(this.title.duoDate).add(x, 'month').format();
      }
      this.parcels.push(parcel)
    }
  }
}