import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReportNavigationComponent } from './report-navigation/report-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
