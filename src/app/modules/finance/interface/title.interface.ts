import { Account } from './account.interface';
import { Person } from './../../person/interface/person.interface';
import { CategoryTitle } from "./category.interface";

export interface FinanceTitle {
    id?: number,
    docNumber?: String,
    emissionDate?: Date,
    value?: number,
    parcelNumber?: number,
    parcel?: String,
    duoDate?: Date,
    historic?: String,
    type?: String,
    status?: String,
    payDay?: Date,
    paid?: boolean,
    person?: Person,
    category?: CategoryTitle,
    account?: Account,
}