import { FinanceParcel } from './../../interface/parcel.interface';
import { FinanceTitle } from './../../interface/title.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { SwalModalService } from 'src/app/service/swal-modal.service';
import { Person } from '../../../person/interface/person.interface';
import { PersonService } from '../../../person/service/person.service';
import { EnumTitleType } from '../../enum/EnumTitleType';
import { FinanceService } from '../service/finance.service';
import { SubCategoryTitle } from '../../interface/sub-category.interface';


@Component({
  selector: 'app-title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.scss']
})
export class TitleFormComponent implements OnInit {
  titleList: Array<FinanceTitle> = []
  title: FinanceTitle = {}
  parcels!: Array<FinanceParcel>
  rule
  type!: any
  subCategory
  personList!: Array<Person>
  numberParcels!: number
  firstDuoDate!: Date
  currentRoute!: any
  subCategoryList!: Array<SubCategoryTitle>
  typeList = [{label:'Receita', key: 'RECEIVE'},  {label: 'Despesa', key: 'PAY'}]
  showModalCategoty: boolean = false
  searchPerson

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private financeService: FinanceService, 
    private swalModalService: SwalModalService,
  ) { 
    this.rule = this.route.snapshot.params.rule
  }

  async ngOnInit() {
    this.type = this.rule === 'pagar'? EnumTitleType.PAY : EnumTitleType.RECEIVE
    this.title.paid = false
    const searchPerson: String = this.type === EnumTitleType.PAY ? 'Fornecedores' : 'Clientes'
    this.searchPerson = searchPerson === 'Fornecedores'? 'Fornecedor' : 'Cliente'
    this.getPersonListByRule(searchPerson)
    this.getAllSubcategories()
  }

  async getPersonListByRule(searchPerson) {
    this.personList = (await this.personService.getPersonListByRule(searchPerson, 1, 100).toPromise().then(response => response)).content
  }

  save() {
    this.parcels.forEach((parcel) => {
      this.createTitle(parcel)
    })
    this.financeService.createTitle(this.titleList).subscribe(
      success => {
        this.swalModalService.sucessModal('Concluído', 'Título cadastrado com sucesso!', false, 1500)
        this.back()
      },
      error => {
        this.swalModalService.errorModal('Erro', 'Verifique os dados e tente novamente!', false, 1500)
      }
    )
  }

  createTitle(parcel: FinanceParcel) {
    const title: FinanceTitle = {}
    title.docNumber = this.title.docNumber
    title.emissionDate = this.title.emissionDate
    title.value = parcel.parcelValue
    title.parcelNumber = parcel.parcelNumber
    title.parcel = parcel.parcelNumber.toString() + "/" + this.numberParcels.toString()
    title.duoDate = parcel.parcelDuoDate
    title.historic = this.title.historic
    title.type = this.type
    title.payDay = this.title.payDay
    title.person = this.title.person
    title.subCategory = this.title.subCategory
    title.paid = this.title.paid
    title.status = "OPEN"

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

  reciveSubCategory(value: SubCategoryTitle) {
    this.subCategory = value
    this.title.subCategory = value
  }

  reciveType(value: any) {
    this.type = value
    this.title.type = value
    const searchPerson: String = value === EnumTitleType.PAY ? 'Fornecedores' : 'Clientes'

    this.getAllSubcategories()
    this.getPersonListByRule(searchPerson)
    
    this.type = value === 'pagar'? EnumTitleType.PAY : EnumTitleType.RECEIVE
    this.title.type = this.type
    this.searchPerson = searchPerson === 'Fornecedores'? 'Fornecedor' : 'Cliente'
  }

  reciveValue(value: any) {
    this.title.value = value
  }

  reciveHistoric(value: any) {
    this.title.historic = value
  }

  reciveNumberParcels(value: any) {
    this.numberParcels = value
  }

  reciveDueDate(value: Date) {
    this.firstDuoDate = value
  }

  showTableParcels() {
    if (this.firstDuoDate && this.numberParcels && this.title.value) {
      this.createParcels()
    }
    return this.firstDuoDate != undefined && this.numberParcels != undefined && this.title.value != undefined
  }

  createParcels() {
    this.parcels = []
    for(let x = 0; x < this.numberParcels; x++) {
      const parcel: FinanceParcel = {}
      parcel.parcelNumber = x+1
      parcel.parcelValue = Math.floor(this.title.value / this.numberParcels)

      if (x===0) {
        parcel.parcelDuoDate = moment(this.firstDuoDate, "YYYY-MM-DD").format();
      } else {
        parcel.parcelDuoDate = moment(this.firstDuoDate).add(x, 'month').format();
      }
      this.parcels.push(parcel)
    }
  }

  back() {
    history.back()  
  }

  async getAllSubcategories() {
    this.subCategoryList = await this.financeService.getAllSubCategoriesByType(this.type).toPromise().then((response) => response);
  }

  openModalCategory(value?) {
    this.showModalCategoty = value
    this.getAllSubcategories()
  }
}
