export class Account{
  constructor (
      public mouvements:Mouvements,
      public name:String,
      public user:String
  ){}
}

export class Depense{
  constructor(
    public title:String,
    public somme:Number, 
    public desc:String, 
    public date:Date){}
}

export class Mouvements {
  constructor(
    public description?:String,
    public price?:Number,
    public date?:Date
  ){}
}