import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http , Response} from '@angular/http';
import {Rouiter} from './models/rouiter.model';
import {News} from './news.interface';
import {Newsbody} from './newsbody.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {  OnInit } from '@angular/core';
@Injectable()
export class CompanyService {
  Comapnies: Rouiter[]= new Array();
  constructor (private http: Http) {

  }
  getnews(id: Date): Observable<News> {
 let link = 'http://beta1.arabfinance.com/mobileapi/rpc/market/GetNews?lastPostingTime=';
    link = link + id + '&count=10&isArabic=false';
     // console.log(link);
      return this.http
      .get(link)
      .map( x => {
      return  <string[]>x.json();
    }).catch((t: Response) => t.json());
  }

   getnewsdetails(id: number): Observable<Newsbody> {
 let link = 'http://beta1.arabfinance.com/mobileapi/rpc/market/GetNewsDetails?newsId=';
    link = link + id ;
      return this.http
      .get(link)
      .map( x => {
      return  <string[]>x.json();
    }).catch((t: Response) => t.json());
  }
}
