import { Component, OnInit } from '@angular/core';
import {StockService} from './stock.service';
import {Stock} from './stock.interface';
@Component({
  selector: 'app-watchlist',
  // templateUrl: './name.component.html',
  // styleUrls: ['./name.component.css']
    template: `
    <ul *ngIf="!pressed">
    <li *ngFor="let item of displayed"> {{item}}
    </li>
    </ul>
    <button (click)="changepressed()" [hidden]="pressed">Edit</button>
    <button (click)="falsepressed()" [hidden]="!pressed"> save </button>
    <ul *ngIf="pressed">
    </ul>
    `,
})
export class WatchlistComponent implements OnInit {
   pressed = false;
   Stockservice: StockService;
   stocks: Object= new Array();
   displayed: string[]= new Array();
   userfilter: boolean[]= new Array ();
   values: number[]= new Array();
   objs: Object[]= new Array();
   // dummy: JSON;

   constructor( Stockservice: StockService) {
 this.Stockservice = Stockservice;
  }
  ngOnInit() {
     for (let i = 0 ; i < 4; i++) {
        this.userfilter[i]  = false;
      }
    this.Stockservice.getstock().subscribe((data: Object[] ) => {this.stocks = data;
            this.objs.push(this.stocks);
            // this.values = this.dummy;
            console.log(this.objs);
           } );
  }
  changepressed() {
        this.pressed = true;
  }
      falsepressed() {
        this.displayed = [];
        this.pressed = false;
        // console.log(this.objs);
        for (let i = 0 ; i < 4 ; i++) {
          if (this.userfilter[i] !== false) {
              this.displayed.push((<Stock>this.objs[i]).N);
              // this.val1.push(this.stocks[i].values[0]);
              // this.val2.push(this.stocks[i].values[1]);
              // this.val3.push(this.stocks[i].values[2]);
            } else if (this.userfilter[i] === false) {
              let x = this.displayed[i];
              this.displayed[i] = this.displayed[this.displayed.length - 1];
              this.displayed[this.displayed.length - 1] = x;
              this.displayed.pop();
            }
  }
}
}

