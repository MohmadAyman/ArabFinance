import {  OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable  ()
export class AskBidService {
  constructor (private http: Http) {
    // for (let i = 0 ; i < 300; i++) {
    //   let strigarr: string[] = new Array();
    //     this.nameobj.push(strigarr);
    // }
  }
  getasks(reuter: string): Observable<string[]> {
     let link = 'http://beta2.arabfinance.com/mobileapi/rpc/market/QuoteAsks?Code=';
    link = link + reuter;
     // console.log(link);
      return this.http
      .get(link)
      .map( x => {
      return  <string[]>x.json();
    }).catch((t: Response) => t.json());
  }
  getbids(reuter: string): Observable<string[]> {
      let link = 'http://beta2.arabfinance.com/mobileapi/rpc/market/QuoteBids?Code=';
    link = link + reuter;
     // console.log(link);
      return this.http
      .get(link)
      .map( x => {
      return  <string[]>x.json();
    }).catch((t: Response) => t.json());
  }
}
