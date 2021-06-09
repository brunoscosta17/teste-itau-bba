import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// containers
import { CompaniesComponent } from './containers/companies/companies.component';
import { CompanyDetailComponent } from './containers/company-detail/company-detail.component';

// components
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// modules
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import localePt from '@angular/common/locales/pt';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import { CepComponent } from './shared/components/cep/cep.component';

// directives
import { CurrencyDirective } from './shared/directives/currency.directive';

registerLocaleData(localePt);

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompaniesComponent,
    CompaniesListComponent,
    CompanyFormComponent,
    CompanyDetailComponent,
    CepComponent,
    CurrencyDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      progressBar: true
    }),
    NgxMaskModule.forRoot(maskConfig),
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [
    CurrencyPipe,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  exports: [CurrencyDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
