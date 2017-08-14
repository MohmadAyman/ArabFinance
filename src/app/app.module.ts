import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {MarketComponent} from './market/market.component';
import {LineChartDemoComponent} from './more.component';
import {WatchlistComponent} from './watchlist.component';
import {NewsComponent} from './news.component';
import {PagenotfoundComponent} from './pagenotfound.component';
import {StockService} from './stock.service';
import {Angular2TokenService , A2tUiModule } from 'angular2-token';
import {AskBidService} from './asksbids.service';
import {CompanyService} from './company.service';
import {GetService} from './else.service';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import { ChartsModule} from 'ng2-charts';
const approutes: Routes = [{path: '', component: LoginComponent},
{ path: 'Watchlist', component: WatchlistComponent } ,
{ path: 'News', component: NewsComponent} ,
{ path: 'Market', component: MarketComponent} ,
{ path: 'More', component: LineChartDemoComponent} ,
{ path: 'Login', component: LoginComponent} ,
{path: '', redirectTo: '/Home', pathMatch: 'full'}, {path: '**', component: PagenotfoundComponent }];
@NgModule({
  declarations: [
    AppComponent , LoginComponent , MarketComponent , LineChartDemoComponent , WatchlistComponent , NewsComponent , PagenotfoundComponent
  ],
  imports: [
    MdTabsModule, BrowserModule , FormsModule , HttpModule , RouterModule.forRoot(approutes) , A2tUiModule , ChartsModule
  ],
  providers: [StockService , Angular2TokenService , AskBidService , CompanyService , GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
