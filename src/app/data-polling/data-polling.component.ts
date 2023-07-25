import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-polling',
  templateUrl: './data-polling.component.html',
  styleUrls: ['./data-polling.component.css']
})
export class DataPollingComponent implements OnInit {
  @Input() cur1: string = 'EUR';
  @Input() cur2: string = 'USD';
  @Input() rate: number = 1.1;
  min: number = -0.05;
  max : number = 0.05;
  timerForCurrentValue: Subscription = new Subscription;
  @Output() newRateChange : EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.timerForCurrentValue = interval(3000).pipe( 
      map(() => { 
        this.calculateNewRate(); 
      }) 
    ).subscribe(); 
  }

  calculateNewRate(){
    this.rate = 1.1 + (Math.random() * (this.max - this.min) + this.min);
    this.newRateChange.emit(this.rate)
   } 

   ngOnDestroy(): void { 
    this.timerForCurrentValue.unsubscribe(); 
  } 
}
