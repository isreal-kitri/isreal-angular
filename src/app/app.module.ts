import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnnouncementSectionComponent } from './announcement-section/announcement-section.component';
import { BbsSectionComponent } from './bbs-section/bbs-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransportationSectionComponent } from './transportation-section/transportation-section.component';
import { StreamchatSectionComponent } from './streamchat-section/streamchat-section.component';
import { WeatherSectionComponent } from './weather-section/weather-section.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementSectionComponent,
    BbsSectionComponent,
    NavbarComponent,
    TransportationSectionComponent,
    StreamchatSectionComponent,
    WeatherSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'transportation-section',
        component: TransportationSectionComponent
      },
      {
        path: 'weather-section',
        component: WeatherSectionComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
