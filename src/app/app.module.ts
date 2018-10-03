import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReportNavigationComponent } from './report-navigation/report-navigation.component';
import { WebNavigationComponent } from './web-navigation/web-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportNavigationComponent,
    WebNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
