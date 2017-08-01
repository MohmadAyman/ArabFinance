import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {MarketComponent} from './market.component';
import {MoreComponent} from './more.component';
import {WatchlistComponent} from './watchlist.component';
import {NewsComponent} from './news.component';
import {PagenotfoundComponent} from './pagenotfound.component';


const approutes: Routes = [{path: 'Home', component: AppComponent},
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
   BrowserModule , HttpModule , RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
