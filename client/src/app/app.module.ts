import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { DepenseComponent } from './depense/depense.component';
import { LoginComponent } from './login/login.component';

import { DepenseService} from './depense.service'

@NgModule({
  declarations: [
    AppComponent,
    DepenseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [DepenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }