import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-exchange-block',
  templateUrl: './exchange-block.component.html',
  styleUrls: ['./exchange-block.component.css']
})
export class ExchangeBlockComponent implements OnInit {
  cur1: string = 'EUR';
  cur2: string = 'USD';
  rate: number = 1.1;
  amount : number = 0;
  fixedRate: number = 0;
  result: number = 0;
  currentCurrencyCode: string = '';
  toggle: boolean = false;
  minVariation : number = 2;
  historyTab: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  calculateCurrency(event: any){
    this.amount = event;
    const variation = (Math.abs(this.fixedRate-this.rate) / this.rate) * 100;
    const finalRate = this.fixedRate != 0 && variation < this.minVariation ? this.fixedRate :  this.rate;
    this.result = this.toggle? this.amount * finalRate : this.amount / finalRate; 
    if(this.historyTab.length == 5)
    this.historyTab.shift();
    this.historyTab.push(
      { rate: this.rate,
        fixedRate: this.fixedRate,
        amount: this.amount,
      currency1: this.toggle? this.cur2 : this.cur1,
    result: this.result,
  currency2: this.toggle? this.cur1 : this.cur2 });
   }

   onRateChange(event:number){
    this.rate = event;
     this.calculateCurrency(this.amount);
    } 
  

    toggleCurrency(){
      this.calculateCurrency(this.result);
    }
    calculateCurrencyWithFixedRate(event: any){
      this.fixedRate = event;
      this.calculateCurrency(this.amount);
    }
   }
