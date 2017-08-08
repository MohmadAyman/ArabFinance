import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {MarketComponent} from './market/market.component';
import {MoreComponent} from './more.component';
import {WatchlistComponent} from './watchlist.component';
import {NewsComponent} from './news.component';
import {PagenotfoundComponent} from './pagenotfound.component';
import {StockService} from './stock.service';
import {Angular2TokenService , A2tUiModule } from 'angular2-token';
<<<<<<< HEAD
import {AskBidService} from './asksbids.service';
const approutes: Routes = [{path: 'Home', component: AppComponent},
=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';

const approutes: Routes = [{path: '', component: LoginComponent},
>>>>>>> 978f96104afbcde6822b7ba8bc9c01f3f96bc2db
{ path: 'Watchlist', component: WatchlistComponent } ,
{ path: 'News', component: NewsComponent} ,
{ path: 'Market', component: MarketComponent} ,
{ path: 'More', component: MoreComponent} ,
{ path: 'Login', component: LoginComponent} ,
{path: '', redirectTo: '/Home', pathMatch: 'full'}, {path: '**', component: PagenotfoundComponent }];
@NgModule({
  declarations: [
    AppComponent , LoginComponent , MarketComponent , MoreComponent , WatchlistComponent , NewsComponent , PagenotfoundComponent
  ],
  imports: [
    MdTabsModule, BrowserModule , FormsModule , HttpModule , BrowserAnimationsModule , RouterModule.forRoot(approutes) , A2tUiModule
  ],
  providers: [StockService , Angular2TokenService , AskBidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
