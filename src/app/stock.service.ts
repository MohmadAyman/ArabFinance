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
      .get('https://www.alphavantage.co/query?apikey=demo&function=TIME_SERIES_INTRADAY&interval=1min&symbol=MSFT')
      .map( x => {
      return <Stock []> x.json();
    }).catch((t: Response) => t.json());
  }
}
