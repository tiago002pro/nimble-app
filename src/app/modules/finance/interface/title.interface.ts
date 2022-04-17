import { Person } from "../../person/interface/person.interface";
import { CategoryTitle } from "./category.interface";

export interface FinanceTitle {
    docNumber?: String,
    emissionDate?: Date,
    value?: Number,
    parcel?: Boolean,
    parcelNumber?: Number,
    duoDate?: Date,
    historic?: String,
    type?: String,
    status?: String,
    payDay?: Date,
    person?: Person,
    category?: CategoryTitle,
    paid?: boolean,
}