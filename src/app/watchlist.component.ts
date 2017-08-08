import { Component, OnInit , AfterContentInit, DoCheck } from '@angular/core';
import {StockService} from './stock.service';
import {AskBidService} from './asksbids.service';
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
    <ul *ngIf="!pressed && !infodisplayed">
    <li *ngFor="let item of displayed;let i=index">{{item}}
    <button (click)="initializeobjects(displayednames[i],stocks[i])" [hidden]="infodisplayed"> display info </button>
    </li>
    </ul>
     <div>
{{displayedstock.name+' '+displayedstock.netchange+' '+displayedstock.currency}}
</div>
<button (click)="infonotdisp()" [hidden]="!infodisplayed"> back </button>
    `,
})
export class WatchlistComponent implements OnInit {
  // [hidden]="pressed"
  // <ul *ngIf="pressed">
    // </ul>
   pressed = false;
   infodisplayed= false;
   Stockservice: StockService;
   AskBidService: AskBidService;
   stocks: string[][]= new Array();
   str: string[]= new Array();
   // namesobj: Names;
    names: string[][]= new Array();
    displayednames: string[][]= new Array();
    displayed: string[]= new Array();
   displayedobjects: Stock[]= new Array();
   userfilter: boolean[]= new Array ();
  Asks: string[][]= new Array ();
  Ask: string[]= new Array ();
  Bids: string[][]= new Array ();
  Bid: string[]= new Array ();
   values: number[]= new Array();
   // objs: Stock[]= new Array();
   displayedstock: Stock;
   // dummy: JSON;

   constructor( Stockservice: StockService , AskBidService: AskBidService) {
 this.Stockservice = Stockservice;
  this.AskBidService = AskBidService;
  }
  ngOnInit() {
     for (let i = 0 ; i < this.names.length; i++) {
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
        this.AskBidService.getasks(this.names[0][0]).subscribe(data  => { this.Ask = data;
             this.Asks.push(this.Ask);
            // this.values = this.dummy;
               console.log(this.Asks);
          //   console.log(this.names.length);
           } );
         this.AskBidService.getbids(this.names[0][0]).subscribe(data  => { this.Bid = data;
             this.Bids.push(this.Bid);
            // this.values = this.dummy;
               console.log(this.Bids);
          //   console.log(this.names.length);
           } );
  }
  infonotdisp() {
        this.infodisplayed = false;
  }
  initializeobjects(names: string[] , stocks: string[]) {
   // for (let i = 0; i < names.length; i++) {
              console.log(this.stocks);
              this.infodisplayed = true;
              this.displayedstock = new Stock();
             // let temp: Stock = new Stock();
              this.displayedstock.name = names[1];
              this.displayedstock.reutername = names[0];
              this.displayedstock.currency = Number (names[2]);
               this.displayedstock.lasttrade = Number(stocks[0]);
              this.displayedstock.netchange = Number(stocks[1]);
              this.displayedstock.percentchange = Number(stocks[2]);
              this.displayedstock.checkinc();
              console.log(this.displayedstock);
              // this.objs.push(temp);
     //   }
  }
      falsepressed() {
                this.pressed = false;
                console.log(this.userfilter);
                this.displayed = [];
        // console.log(this.objs);
        for (let i = 0 ; i < this.names.length ; i++) {
          if (this.userfilter[i] === true) {
                 this.displayed.push(this.names[i][0]);
                 this.displayednames.push(this.names[i]);
              // this.displayedobjects.push(this.objs[i]);
              // this.val1.push(this.stocks[i].values[0]);
              // this.val2.push(this.stocks[i].values[1]);
              // this.val3.push(this.stocks[i].values[2]);
            } else if (this.userfilter[i] === false) {
              const x = this.displayed[i];
              this.displayed[i] = this.displayed[this.displayed.length - 1];
              this.displayed[this.displayed.length - 1] = x;
              this.displayed.pop();
                const y = this.displayednames[i];
              this.displayednames[i] = this.displayednames[this.displayednames.length - 1];
              this.displayednames[this.displayednames.length - 1] = y;
              this.displayednames.pop();
            }
  }
  console.log(this.Stockservice.getstock(this.displayed));
   this.Stockservice.getstock(this.displayed). subscribe((data: string[] ) => {this.str = data;
              this.stocks.push(this.str);
              console.log(this.stocks);
             // this.values = this.dummy;
          //  console.log(this.names[0][0]);
          //   console.log(this.names.length);
           } );
}
}

