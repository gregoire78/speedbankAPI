import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account, Mouvements } from '../models/depense';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public mvtData:Mouvements;
  public doughnutChartLabels:Array<String>;
  public doughnutChartData:Array<Number>;

  constructor(public httpDepense: HttpClient) { 
    const headers = new HttpHeaders().set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyZWcuY2Zka2xmdmRqZmRlQGZmLmNvbSIsImlkIjoiNTlmYjIwZDg2ZGUyNWYwNGJjOTA0YjQ2IiwiaWF0IjoxNTA5NjY5MzAxfQ.umKWydAL2I2cARso75IO77D9PDAu34jcrvbCfhLiM_k');
    this.httpDepense.get('http://blooming-bayou-61041.herokuapp.com/accounts/59fb95b63fc15200c76b1816?mvt=true', {headers})
    .subscribe((data:Account)=> {
      console.log(data);
      this.mvtData = data.mouvements;
      this.doughnutChartLabels=this.mvtData[0].description;
      this.doughnutChartData=this.mvtData[0].price;
    });
  }

  ngOnInit() {
  }

  public doughnutChartType:string = 'doughnut';

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
