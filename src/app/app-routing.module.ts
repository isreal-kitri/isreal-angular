/**
 * Created by danawacomputer on 2017-07-20.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TransportationSectionComponent} from "./transportation-section/transportation-section.component";
import {WeatherSectionComponent} from "./weather-section/weather-section.component";
import {AnnounceComponent} from "./announce/announce.component";
import {BbsFullComponent} from "./bbs-full/bbs-full.component";
import {MainMountainComponent} from "./main-mountain/main-mountain.component";
import {AnnounceDetailComponent} from "./announce-detail/announce-detail.component";
import {AnnounceRegistComponent} from "./announce-regist/announce-regist.component";

const routes: Routes = [
  {
    path: 'transportation-section',
    component: TransportationSectionComponent
  },
  {
    path: 'weather-section',
    component: WeatherSectionComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'announce',
    component: AnnounceComponent
  },
  {
    path: 'bbs',
    component: BbsFullComponent
  },
  {
    path: 'main',
    component: MainMountainComponent
  },
  {
    path: 'announce/:post_seq',
    component: AnnounceDetailComponent
  },
  {
    path: 'announce/regist',
    component: AnnounceRegistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
