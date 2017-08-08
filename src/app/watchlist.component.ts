import { Component, OnInit , AfterContentInit, DoCheck } from '@angular/core';
import {StockService} from './stock.service';
import {Stock} from './stock.interface';
import {Names} from './models/names.interface';
@Component({
  selector: 'app-watchlist',
  // templateUrl: './name.component.html',
  // styleUrls: ['./name.component.css']
    template: `
    <button (click)="changepressed()" [hidden]="pressed">Edit</button>
    <button (click)="falsepressed()" [hidden]="!pressed"> save </button>
    <ul *ngIf="pressed">
    <li *ngFor="let item of names ; let i=index">
        {{item[0]}}
    <input type="checkbox" [(ngModel)]="userfilter[i]"> {{userfilter[i]}}
    </li>
    </ul>
    `,
})
export class WatchlistComponent implements OnInit {
  // [hidden]="pressed"
  // <ul *ngIf="pressed">
    // </ul>
   pressed = false;
   Stockservice: StockService;
   stocks: string[][]= new Array();
   str: string[]= new Array();
   // namesobj: Names;
    names: string[][]= new Array();
   displayed: string[]= new Array();
   displayedobjects: Stock[]= new Array();
   userfilter: boolean[]= new Array ();
   values: number[]= new Array();
   objs: Stock[]= new Array();
   // dummy: JSON;

   constructor( Stockservice: StockService) {
 this.Stockservice = Stockservice;
  }
  ngOnInit() {
     for (let i = 0 ; i < 4; i++) {
        this.userfilter[i]  = false;
      }
    this.Stockservice.getnames().subscribe(data  => { this.names = data;
            // this.names.push(this.stocks);
            // this.values = this.dummy;
          //  console.log(this.names[0][0]);
          //   console.log(this.names.length);
           } );
  }
  changepressed() {
        this.pressed = true;
  }
  initializeobjects(names: string[][] , stocks: string[][]) {
    for (let i = 0; i < names.length; i++) {
              let temp: Stock = new Stock();
              temp.name = names[i][1];
              temp.reutername = names[i][0];
              temp.currency = Number (names[i][2]);
              temp.lasttrade = Number(stocks[i][0]);
              temp.netchange = Number(stocks[i][1]);
              temp.percentchange = Number(stocks[i][2]);
              temp.checkinc();
              this.objs.push(temp);
        }
  }
      falsepressed() {
                this.pressed = false;
                console.log(this.userfilter);

  //               this.displayed = [];
  //       // console.log(this.objs);
  //       for (let i = 0 ; i < this.names.length ; i++) {
  //         if (this.userfilter[i] !== false) {
  //             this.displayedobjects.push(this.objs[i]);
  //             // this.val1.push(this.stocks[i].values[0]);
  //             // this.val2.push(this.stocks[i].values[1]);
  //             // this.val3.push(this.stocks[i].values[2]);
  //           } else if (this.userfilter[i] === false) {
  //             const x = this.displayed[i];
  //             this.displayed[i] = this.displayed[this.displayed.length - 1];
  //             this.displayed[this.displayed.length - 1] = x;
  //             this.displayed.pop();
  //           }
  // }
}
}

