import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {NameService} from './app.service';
import {App} from './app.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [NameService]
})
export class AppComponent implements OnInit {
  title = 'app';
  servant: App[];
  service: NameService;
  constructor( service: NameService) {
 this.service = service;
  }
  ngOnInit() {
      this.service.getemp().subscribe(data => this.servant = data);
      // this.service.postemp().subscribe(data => this.servant = data, Error => console.log(Error));

  }
}
