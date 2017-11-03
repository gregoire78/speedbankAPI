import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { DepenseComponent } from './depense/depense.component';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { DepenseService} from './depense.service';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    DepenseComponent,
    LoginComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    ChartsModule,
    HttpClientModule
  ],
  providers: [DepenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }