import { Component } from '@angular/core';
import { DepenseService } from './depense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banquos';
  
  compteParent;

  constructor(public mvtarr: DepenseService){
      this.compteParent = this.mvtarr.getMouvements();
  }
}