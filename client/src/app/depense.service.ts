import { Injectable } from '@angular/core';
import { Depense } from './models/depense';

@Injectable()
export class DepenseService {
  
  constructor() { }

  getMouvements():Array<Depense>{
    return [
      new Depense('abonnement yo', -300, 'description', new Date()),
    ]
  }
}