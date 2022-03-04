import { Component, OnInit } from '@angular/core';
import moment from 'moment';
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

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.createParcels()
    console.log("titles", this.title);
    console.log("parcels", this.parcels);

  }

  back() {}

  reciveDocNumber(value: any) {
    this.title.docuNumber = value
  }

  reciveEmissionDate(value: any) {
    this.title.emissionDate = value
  }

  reciveProvider(value: any) {
    this.title.provider = value
  }

  reciveCategory(value: any) {
    this.title.category = value
  }

  reciveValue(value: any) {
    this.title.value = value
  }

  reciveParcel(value: any) {
    this.title.parcel = value
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
    for(let x = 0; x < this.title.parcel; x++) {
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