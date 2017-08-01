import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http , Response} from '@angular/http';
import {App} from './app.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class NameService {
constructor (private http: Http) {

  }
  getemp(): Observable<App[]> {
      return this.http.get('./../assets/apps.json').map( x => {
      return <App []> x.json();
    });
  }
  /*postemp(): Observable<App[]> {
      let body = JSON.stringify({id: 1, name: 'Alaa'});
      return this.http.post('http://localhost:4200/', body).map( x => {
      return <App []> x.json();
    });
  }*/

}
