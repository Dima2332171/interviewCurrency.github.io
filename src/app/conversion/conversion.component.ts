import { Component, OnInit } from '@angular/core';
import {CurrencyApiService} from "../currency-api.service";


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
currJson:any = [];

base1 = 'USD';
base2 = 'USD';
result:number = 1;
input:string = '1';

numberCurrency:number = 1;
  inputCurrency:number = 1;
  changeBase1(currency1:string){
this.base1 = currency1;
}
  changeBase2(currency2:string){
  this.base2 = currency2;
}
  constructor(private currancy: CurrencyApiService) {}
  convert(){
    this.inputCurrency = this.numberCurrency;
    this.currancy.getCurrencyData(this.base1).subscribe(data=>{
      this.currJson = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJson);
      if(this.base2==='USD'){
        this.result = this.currJson.rates.USD*this.numberCurrency;
      }
      if(this.base2==='UAH'){
        this.result = this.currJson.rates.UAH*this.numberCurrency;

      }
      if(this.base2==='EUR'){
        this.result = this.currJson.rates.EUR*this.numberCurrency;

      }
    })
    }

  ngOnInit(): void {
  }

}
