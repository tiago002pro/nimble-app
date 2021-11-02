import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TextMaskModule } from "angular2-text-mask";
import { AppRoutingModule } from "src/app/app-routing.module";
import { NbInputCpfcnpjComponent } from "../components/nb-input-cpfcnpj/nb-input-cpfcnpj.component";
import { NbInputDateComponent } from "../components/nb-input-date/nb-input-date.component";
import { NbInputNumberComponent } from "../components/nb-input-number/nb-input-number.component";
import { NbInputPhoneComponent } from "../components/nb-input-phone/nb-input-phone.component";
import { NbInputTextComponent } from "../components/nb-input-text/nb-input-text.component";
import { NbInputZipcodeComponent } from "../components/nb-input-zipcode/nb-input-zipcode.component";
import { NbPersonDataComponent } from "./components/nb-person-data/nb-person-data.component";
import { NbPersonDocumentsComponent } from "./components/nb-person-documents/nb-person-documents.component";
import { NbPersonLocationComponent } from "./components/nb-person-location/nb-person-location.component";
import { PersonFormComponent } from "./person-form/person-form.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonService } from "./service/person.service";

@NgModule({
    declarations: [
        PersonFormComponent,
        PersonListComponent,
        NbInputCpfcnpjComponent,
        NbInputDateComponent,
        NbInputNumberComponent,
        NbInputPhoneComponent,
        NbInputTextComponent,
        NbInputZipcodeComponent,
        NbPersonDataComponent,
        NbPersonDocumentsComponent,
        NbPersonLocationComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        TextMaskModule,
    ],
    providers: [],
    bootstrap: []
})

export class PersonModule { }