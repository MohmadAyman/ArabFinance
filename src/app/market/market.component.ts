import { Component, OnInit } from '@angular/core';
// import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  // exampleDatabase = new ExampleDatabase();
  // dataSource: ExampleDataSource | null;

  constructor() { }
  ngOnInit() {
    function top_5() {
      return 0;      
    }
   }
}
