import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Person } from '../../../person/interface/person.interface';
import { PersonService } from '../../../person/service/person.service';
import { EnumTitleType } from '../enum/EnumTitleType';
import { CategoryTitle } from '../interface/category.interface';
import { FinanceParcel } from '../interface/parcel.interface';
import { FinanceTitle } from '../interface/title.interface';
import { FinanceService } from '../service/finance.service';

@Component({
  selector: 'app-finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.scss']
})
export class FinanceFormComponent implements OnInit {
  titleList: Array<FinanceTitle> = []
  title: FinanceTitle = {}
  parcels!: Array<FinanceParcel>
  type!: any
  personList!: Array<Person>
  numberParcels!: Number
  firstDuoDate!: Date
  currentRoute!: any
  categoryList!: Array<CategoryTitle>
  typeList = [{name:'Receita', key: 'receive'},  {name: 'Despesa', key: 'pay'}]

  constructor(
    private personService: PersonService,
    private financeService: FinanceService
  ) {}

  async ngOnInit() {
    this.title.type = this.type === 'receive' ? this.typeList[0].key :  this.typeList[1].key
    this.title.paid = false
    const searchPerson: String = this.title.type === EnumTitleType.PAY ? 'Fornecedores' : 'Clientes'
    this.personList = (await this.personService.getPersonListByRule('Fornecedores', 1, 100).toPromise().then(response => response)).content
    this.getAllcategories()
  }

  save() {
    this.parcels.forEach((parcel) => {
      this.createTitle(parcel)
    })
    this.financeService.createTitle(this.titleList).subscribe(
      success => {
        this.sucessModal(); 
        this.back()
      },
      error => {
        this.errorModal()
      }
    )
  }

  createTitle(parcel: FinanceParcel) {
    const title: FinanceTitle = {}
    title.docNumber = this.title.docNumber
    title.emissionDate = this.title.emissionDate
    title.value = this.title.value
    title.parcel = this.title.parcel
    title.parcelNumber = parcel.parcelNumber
    title.duoDate = parcel.parcelDuoDate
    title.historic = this.title.historic
    title.type = this.type
    title.payDay = this.title.payDay
    title.person = this.title.person
    title.category = this.title.category
    title.paid = this.title.paid

    this.titleList.push(title)
  }

  reciveDocNumber(value: any) {
    this.title.docNumber = value
  }

  reciveEmissionDate(value: any) {
    this.title.emissionDate = value
  }

  recivePerson(value: Person) {
    this.title.person = value
  }

  reciveCategory(value: CategoryTitle) {
    this.title.category = value
  }

  reciveType(value: any) {
    this.title.type = value
  }

  reciveValue(value: any) {
    this.title.value = value
  }

  reciveHistoric(value: any) {
    this.title.historic = value
  }

  reciveNumberParcels(value: any) {
    this.numberParcels = value
    this.title.parcel = this.numberParcels > 1 ? true : false
  }

  reciveDueDate(value: Date) {
    this.firstDuoDate = value
  }

  showTableParcels() {
    if (this.firstDuoDate && this.numberParcels && this.title.value) {
      this.createParcels()
    }
    return this.firstDuoDate && this.numberParcels && this.title.value
  }

  createParcels() {
    this.parcels = []
    for(let x = 0; x < this.numberParcels; x++) {
      const parcel: FinanceParcel = {}
      parcel.parcelNumber = x+1
      parcel.parcelValue = this.title.value

      if (x===0) {
        parcel.parcelDuoDate = moment(this.firstDuoDate, "YYYY-MM-DD").format();
      } else {
        parcel.parcelDuoDate = moment(this.firstDuoDate).add(x, 'month').format();
      }
      this.parcels.push(parcel)
    }
  }

  sucessModal() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Concluído',
      text: 'Título cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  errorModal() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Erro',
      text: 'Verifique os dados e tente novamente.',
      showConfirmButton: false,
      timer: 1500
    })
  }

  back() {
    history.back()  
  }

  async getAllcategories() {
    this.categoryList = await this.financeService.getAllCategoriesByType('pay').toPromise().then((response) => response);
  }
}