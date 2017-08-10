import { Component, OnInit , AfterContentInit, DoCheck } from '@angular/core';
import {StockService} from './stock.service';
import {AskBidService} from './asksbids.service';
import {CompanyService} from './company.service';
import {Stock} from './stock.interface';
import {Names} from './models/names.interface';
import {News} from './news.interface';
import {Newsbody} from './newsbody.interface';
import {SerResponse} from './response.interface';
import {Newsresponse} from './newsresponse.interface';
import {Newsdetailsresponse} from './newsdetailsresponse.interface';
import {Detailsupdateresponse} from './detailsupdateresponse.interface';
import {Detailsresponse} from './details.interface';
import {Chartobjectresponse} from './chartobjresponse.interface';
@Component({
  selector: 'app-watchlist',
  // templateUrl: './name.component.html',
  // styleUrls: ['./name.component.css']
    template: `
    <button (click)="changepressed()" [hidden]="pressed">Edit</button>
    <button (click)="falsepressed()" [hidden]="!pressed"> save </button>
    <ul *ngIf="pressed">
    <li *ngFor="let item of List.result ; let i=index">
        {{item[0]}}
    <input type="checkbox" [(ngModel)]="userfilter[i]"> {{userfilter[i]}}
    </li>
    </ul>
    <ul *ngIf="!pressed && !infodisplayed">
    <li *ngFor="let item of displayed;let i=index">{{item}}
    <button (click)="initializeobjects(displayednames[i],stocks.result[i])" [hidden]="infodisplayed"> display info </button>
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
   CompanyService: CompanyService;
   stocks: SerResponse;
   str: string[]= new Array();
   isArabic = true;
   // namesobj: Names;
    names: string[][]= new Array();
    displayednames: string[][]= new Array();
    displayed: string[]= new Array();
   displayedobjects: Stock[]= new Array();
   userfilter: boolean[]= new Array ();
  // Asks: string[][]= new Array ();
  // Ask: string[]= new Array ();
  count= 10;
  // Bids: string[][]= new Array ();
  // Bid: string[]= new Array ();
  News: Newsresponse;
  Newsbody: Newsdetailsresponse;
  date: Date= new Date('2017-8-1');
   values: number[]= new Array();
   // objs: Stock[]= new Array();
   displayedstock: Stock;
  List: SerResponse;
  Asks: SerResponse;
  Bids: SerResponse;
  stockdetails: Detailsresponse;
  stockupdates: SerResponse;
  stockdetailsupdates: Detailsupdateresponse;
  from= new Date('2017-5-1');
  chart: Chartobjectresponse;
   // dummy: JSON;

   constructor( Stockservice: StockService , AskBidService: AskBidService , CompanyService: CompanyService) {
 this.Stockservice = Stockservice;
  this.AskBidService = AskBidService;
  this.CompanyService = CompanyService;
  }
  ngOnInit() {
     for (let i = 0 ; i < this.names.length; i++) {
        this.userfilter[i]  = false;
      }
    this.Stockservice.getnames(this.isArabic).subscribe(data  => { this.List = data;
            // this.names.push(this.stocks);
            // this.values = this.dummy;
          //  console.log(this.names[0][0]);
          console.log(this.List);
           } );
  }
  changepressed() {
        this.pressed = true;
        this.AskBidService.getasks(this.List.result[0][0]).subscribe(data  => { this.Asks = data;
            // this.Asks.push(this.Ask);
            // this.values = this.dummy;
               console.log(this.Asks);
          //   console.log(this.names.length);
           } );
         this.AskBidService.getbids(this.List.result[0][0]).subscribe(data  => { this.Bids = data;
            // this.Bids.push(this.Bid);
            // this.values = this.dummy;
               console.log(this.Bids);
          //   console.log(this.names.length);
           } );
        this.CompanyService.getnews(this.date, this.count, this.isArabic).subscribe(data  => {this.News = data;
          console.log(this.News);
           } );
        this.CompanyService.getnewsdetails(406691).subscribe(data  => {this.Newsbody = data;
          console.log(this.Newsbody);
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
        for (let i = 0 ; i < this.List.result.length ; i++) {
          if (this.userfilter[i] === true) {
                 this.displayed.push(this.List.result[i][0]);
                 this.displayednames.push(this.List.result[i]);
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
  let p = '';
  for (let i = 0 ; i < this.displayed.length - 1; i++) {
      p = p + this.displayed[i] + ',';
      console.log('in the loop');
  }
  p = p + this.displayed[this.displayed.length - 1];
  console.log('out the loop');
  console.log(p);
  console.log(this.Stockservice.getstock(p , this.isArabic));
   this.Stockservice.getstock(p , this.isArabic). subscribe((data ) => {this.stocks = data;
              // this.stocks.push(this.str);
              console.log(this.stocks);
             // this.values = this.dummy;
          //  console.log(this.names[0][0]);
          // console.log(this.stocks);
           } );
        this.Stockservice.getstockdetails(p , this.isArabic). subscribe((data ) => {this.stockdetails = data;
              // this.stocks.push(this.str);
              console.log(this.stockdetails);
             // this.values = this.dummy;
          //  console.log(this.names[0][0]);
          // console.log(this.stocks);
           } );
         this.Stockservice.getstockdetailswithupdate(p , this.isArabic, this.date). subscribe((data ) => {this.stockdetailsupdates = data;
              // this.stocks.push(this.str);
              console.log(this.stockdetailsupdates);
             // this.values = this.dummy;
          //  console.log(this.names[0][0]);
          // console.log(this.stocks);
           } );
         this.Stockservice.getstockwithupdate(p , this.date). subscribe((data ) => {this.stockupdates = data;
              // this.stocks.push(this.str);
              console.log(this.stockupdates);
             // this.values = this.dummy;
          //  console.log(this.names[0][0]);
          // console.log(this.stocks);
           } );
          this.Stockservice.getchart(p , this.from , this.date, 0). subscribe((data ) => {this.chart = data;
              // this.stocks.push(this.str);
              console.log(this.chart);
             // this.values = this.dummy;
          //  console.log(this.names[0][0]);
          // console.log(this.stocks);
           } );
}
}

