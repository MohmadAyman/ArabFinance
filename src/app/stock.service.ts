import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http , Response} from '@angular/http';
import {Stock} from './stock.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class StockService {
  constructor (private http: Http) {

  }
  getstock(): Observable<Stock[]> {
      return this.http
      .get('http://beta2.arabfinance.com/mobileapi/rpc/market/GetSimpleQuotesDetails?Codes=egts,amer,orwe&isArabic=true')
      .map( x => {
      return  <Stock[]>x.json();
    }).catch((t: Response) => t.json());;
  }
}
