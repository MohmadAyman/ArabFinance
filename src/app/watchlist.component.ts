import { Component, OnInit } from '@angular/core';
import {StockService} from './stock.service';
import {Stock} from './stock.interface';
@Component({
  selector: 'app-watchlist',
  // templateUrl: './name.component.html',
  // styleUrls: ['./name.component.css']
    template: `
    <ul *ngIf="!pressed">
    <li *ngFor="let item of displayed"> {{item}} </li>
    </ul>
    <button (click)="changepressed()" [hidden]="pressed">Edit</button>
    <button (click)="falsepressed()" [hidden]="!pressed"> save </button>
    <ul *ngIf="pressed">
    <li *ngFor=" let item of stocks , let i=index">
    <input type="checkbox" [(ngModel)]="userfilter[i]">
    <div>{{item.rouiter}}</div></li>
    </ul>
    `,

})
export class WatchlistComponent implements OnInit {
   pressed = false;
   Stockservice: StockService;
   stocks: Stock[];
   displayed: string[]= new Array();
   userfilter: boolean[]= new Array ();
   constructor( Stockservice: StockService) {
 this.Stockservice = Stockservice;
  }
  ngOnInit() {
     for (let i = 0 ; i < 4; i++) {
        this.userfilter[i]  = false;
      }
    this.Stockservice.getstock().subscribe(data => {this.stocks = data;
            console.log(this.stocks);
           } , Error => console.log(Error));
  }
  changepressed() {
        this.pressed = true;
  }
      falsepressed() {
        this.displayed = [];
        this.pressed = false;
        for (let i = 0 ; i < 4 ; i++) {
          if (this.userfilter[i] !== false) {
              this.displayed.push(this.stocks[i].rouiter);
            } else if (this.userfilter[i] === false) {
              let x = this.displayed[i];
              this.displayed[i] = this.displayed[this.displayed.length - 1];
              this.displayed[this.displayed.length - 1] = x;
              this.displayed.pop();
            }
  }
}
}
