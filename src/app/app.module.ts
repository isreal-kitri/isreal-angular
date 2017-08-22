import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnnouncementSectionComponent } from './announcement-section/announcement-section.component';
import { BbsSectionComponent } from './bbs-section/bbs-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransportationSectionComponent } from './transportation-section/transportation-section.component';
import { StreamchatSectionComponent } from './streamchat-section/streamchat-section.component';
import { WeatherSectionComponent } from './weather-section/weather-section.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {IsrealService} from "./service/IsrealService";
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import { SelectSectionComponent } from './select-section/select-section.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AnnounceComponent } from './announce/announce.component';
import { BbsFullComponent } from './bbs-full/bbs-full.component';
import { MainMountainComponent } from './main-mountain/main-mountain.component';
import {AgmCoreModule} from "@agm/core";
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { AnnounceDetailComponent } from './announce/announce-detail/announce-detail.component';
import { AnnounceRegistComponent } from './announce/announce-regist/announce-regist.component';
import { MtGraphComponent } from './mt-graph/mt-graph.component';
import { MountainDetailComponent } from './main-mountain/mountain-detail/mountain-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementSectionComponent,
    BbsSectionComponent,
    NavbarComponent,
    TransportationSectionComponent,
    StreamchatSectionComponent,
    WeatherSectionComponent,
    SelectSectionComponent,
    CarouselComponent,
    AnnounceComponent,
    BbsFullComponent,
    MainMountainComponent,
    FooterSectionComponent,
    AnnounceDetailComponent,
    AnnounceRegistComponent,
    MtGraphComponent,
    MountainDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    // apiKey 입력
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQW0wEvwnxAp0wfcsXRyRcOmV70lVgUzA'
    })
  ],
  providers: [
    IsrealService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
