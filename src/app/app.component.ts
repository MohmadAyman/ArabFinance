import { Component, OnInit } from '@angular/core';
import {Http , HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NameService} from './app.service';
import {Stock} from './stock.interface';
import {StockService} from './stock.service';
import {Angular2TokenService} from 'angular2-token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [NameService]
})
export class AppComponent implements OnInit {
  title = 'app';
  Stockservice: StockService;
  stocks: Stock[];
  constructor( Stockservice: StockService , private _tokenService: Angular2TokenService ) {
   this.Stockservice = Stockservice;
   this._tokenService.init();
  }
  ngOnInit() {
          // this.Stockservice.getstock().subscribe(data => {this.stocks = data;
          //   console.log(this.stocks);
          //   // for (let i = 0 ; i < this.stocks['Time Series (1min)'].length; i++) {

          //   //   }
          //  } , Error => console.log(Error));
  }
}

