import {  OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http , Response} from '@angular/http';
import {Stock} from './stock.interface';
import {Names} from './models/names.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable  ()
export class StockService implements OnInit {
  stocks: Stock;
  objs: Stock[]= new Array();
  // nameobj: string [][] = new Array() ;
  substrings: string [] = new Array();
  names: string [] = new Array();
  constructor (private http: Http) {
    // for (let i = 0 ; i < 300; i++) {
    //   let strigarr: string[] = new Array();
    //     this.nameobj.push(strigarr);
    // }
  }
  ngOnInit() {
    //  this.getnames().subscribe(data  => {this.nameobj = data;
    //         console.log(this.nameobj);
    //         // this.names = this.nameobj.V;
    //        }, Error => console.log(Error) );
    //  this.getstock().subscribe(data  => {this.stocks = data;
    //         this.objs.push(this.stocks);
    //         // this.values = this.dummy;
    //         // console.log(this.objs);
    //        } );
  }
  getstock(nameobj: string[]): Observable<string[]> {
    console.log(nameobj.length);
     let link = 'http://beta2.arabfinance.com/mobileapi/rpc/market/GetSimpleQuotesDetails?Codes=';
     for (let i = 0 ; i < nameobj.length - 1 ; i++) {
          link = link + nameobj[i] + ',';
     }
    // console.log(this.nameobj) egts,amer,orwe;
     link = link + nameobj[nameobj.length - 1][0] + '&isArabic=true';
      return this.http
      .get(link)
      .map( x => {
      return  <string[]>x.json();
    }).catch((t: Response) => t.json());
  }
  getnames(): Observable<string[][]> {
      let value= this.http
      // .get('http://beta2.arabfinance.com/mobileapi/rpc/market/GetQuotesList?isArabic=true');
      .get('./../assets/cmps.json');
      let v2 = value.map( x => <string[][]> x.json())
      .catch((t: Response) => t.json());
      return v2;
  }
}
