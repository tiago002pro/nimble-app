import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  reciveDueDate(value: any) {
    this.title.duoDate = value
  }

  reciveHistoric(value: any) {
    this.title.historic = value
  }

  showParcels() {
    // if (this.title.value && this.title.parcel && this.title.duoDate) {
      return true
    // }
  }

  createParcels() {
    this.parcels = []
    for(let x = 0; x < this.title.parcel; x++) {
      console.log("xxx", x, "/", this.title.parcel);
      // const today = new Date();
      // const tomorrow = new Date();
      // tomorrow.setDate(today.getDate() + 1);
      // console.log("today", today);
      // console.log("tomorrow", tomorrow);
      
      // console.log("getDate()",  this.title.duoDate.getDate());
      const parcel: FinanceParcel = {}
      parcel.parcel = x+1
      parcel.value = this.title.value

      if (x===0) {
        parcel.duoDate = this.title.duoDate
      } else {
        const date = new Date(this.title.duoDate);
        console.log("date", date);

        const dateParcel = date.getDay() + (30 * x)
        console.log("dateParcel", dateParcel);
        
        parcel.duoDate= date.getDay() + (30 * x)
        // .getDate() + 30 * x
      }
      this.parcels.push(parcel)
    }
  }
}