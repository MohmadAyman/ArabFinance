import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http , Response} from '@angular/http';
import {Rouiter} from './models/rouiter.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {  OnInit } from '@angular/core';
@Injectable()
export class CompanyService {
  Comapnies: Rouiter[]= new Array();
  constructor (private http: Http) {

  }
  getCompany(id: string) {
          for (let i = 0; i < this.Comapnies.length ; i++) {
            if (this.Comapnies[i].Id === id) {
                return this.Comapnies[i];
            }
          }
  }
  // getstock(): Observable<Stock> {
  //     return this.http
  //     .get('http://beta2.arabfinance.com/mobileapi/rpc/market/GetSimpleQuotesDetails?Codes=egts,amer,orwe&isArabic=true')
  //     .map( x => {
  //     return  <Stock>x.json();
  //   }).catch((t: Response) => t.json());
  // }
}
