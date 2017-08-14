import { Component, OnInit } from '@angular/core';
import {News} from './news.interface';
import {Newsbody} from './newsbody.interface';
import {SerResponse} from './response.interface';
import {Newsresponse} from './newsresponse.interface';
import {Newsdetailsresponse} from './newsdetailsresponse.interface';
import {Detailsupdateresponse} from './detailsupdateresponse.interface';
import {CompanyService} from './company.service';
@Component({
  selector: 'app-news',
  // templateUrl: './name.component.html',
  // styleUrls: ['./name.component.css']
    template: `
    <ul>
    <li *ngFor="let item of News.result.V">{{item[1]}}</li>
    </ul>
    `,

})
export class NewsComponent implements OnInit {
  News: Newsresponse;
  Newsbody: Newsdetailsresponse;
  date= new Date('2017-5-1');
  constructor(private CompanyService: CompanyService) { }
 ngOnInit() {
   this.CompanyService.getnews(this.date , 10, true).subscribe(data  => {this.News = data;
          console.log(this.News);
           });
  //  this.CompanyService.getnewsdetails().subscribe(data  => {this.Newsbody = data;
  //         console.log(this.Newsbody);
  //          });
  }
}
