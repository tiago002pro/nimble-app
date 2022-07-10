import { KanbanModule } from './modules/kanban/kanban.module';
import { FinanceModule } from './modules/finance/finance.module';
import { PersonModule } from './modules/person/person.module';
import { ComponentsModule } from './modules/components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/dashboard/home.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { APP_BASE_HREF } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LoginComponent } from './views/login/login.component';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomerAttentionComponent } from './modules/customer-attention/customer-attention.component';
import { CustomerAttentionListComponent } from './modules/customer-attention/customer-attention-list/customer-attention-list.component';
registerLocaleData(ptBr)

const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
  "bgsColor": "#00ff89",
  "bgsOpacity": 1,
  "bgsPosition": "center-center",
  "bgsSize": 150,
  "bgsType": "ball-spin-fade-rotating",
  "blur": 9,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#77ffc0",
  "fgsPosition": "center-center",
  "fgsSize": 140,
  "fgsType": "three-strings",
  "gap": 40,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(32,27,44)",
  "pbColor": "#6f3de7",
  "pbDirection": "rtl",
  "pbThickness": 10,
  "hasProgressBar": false,
  "text": "CARREGANDO",
  "textColor": "#77ffc0",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: false,
  min: 0,
  max: 99999999999,
  inputMode: CurrencyMaskInputMode.NATURAL
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    CustomerAttentionComponent,
    CustomerAttentionListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), 
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    MatSelectModule,
    NgxMatSelectSearchModule, 
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    MatTooltipModule,
    ComponentsModule,
    PersonModule,
    FinanceModule,
    KanbanModule,
  ],
  // providers: [{provide: APP_BASE_HREF, useValue : 'nimble'}],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
