import { Component, OnInit, Input } from '@angular/core';
import { Depense } from '../models/depense';

@Component({
  selector: 'depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent implements OnInit {

  @Input()
  compte:Array<Depense>;

  constructor() {
  }

  ngOnInit() {
  }


  enregistrer(depense){
    this.compte.push(new Depense(depense.title, depense.somme, depense.desc, new Date()))
  }

}