

import {Component, ElementRef, NgModule, OnInit, Renderer} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AgmCoreModule} from "@agm/core";

@Component({
  selector: 'main-mountain',
  styles: [`
    .sebm-google-map-container {
       height: 500px;
       width: 800px;
     }
  `],
  template: `
    <sebm-google-map
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      [disableDefaultUI]="false"
      [zoomControl]="false"
      (mapClick)="mapClicked($event)">
    
     <sebm-google-map-marker
          *ngFor="let m of markers; let i = index"
          (markerClick)="clickedMarker(m.label, i)"
          [latitude]="m.lat"
          [longitude]="m.lng"
          [label]="m.label"
          [markerDraggable]="m.draggable"
          (dragEnd)="markerDragEnd(m, $event)">
          
       <sebm-google-map-info-window>
          <strong>InfoWindow content</strong>
        </sebm-google-map-info-window>
        
     </sebm-google-map-marker>
      
     <sebm-google-map-circle [latitude]="lat + 0.3" [longitude]="lng"
          [radius]="5000"
          [fillColor]="'red'"
          [circleDraggable]="true"
          [editable]="true">
      </sebm-google-map-circle>

   </sebm-google-map>
  `,
  templateUrl: './main-mountain.component.html',
  styleUrls: ['./main-mountain.component.css']
})
export class MainMountainComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  // google maps zoom level
  zoom: number = 7;

  // initial center position for the map
  lat: number = 36.145029;
  lng: number = 127.857517;



  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }


  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }



  markers: marker[] = [
    {
      lat: 35.808458,
      lng: 128.112730,
      draggable: true
    },
    {
      lat: 36.357374,
      lng: 127.209145,
      draggable: false
    },
    {
      lat: 35.487610,
      lng: 126.869100,
      draggable: true
    },
    {
      lat: 35.876494,
      lng: 127.756719,
      draggable: true
    },
    {
      lat: 35.128229,
      lng: 127.004426,
      draggable: true
    },
    {
      lat: 35.645374,
      lng: 126.573265,
      draggable: true
    },
    {
      lat: 37.676810,
      lng: 126.992706,
      draggable: true
    },
    {
      lat: 38.144646,
      lng: 128.417001,
      draggable: true
    },
    {
      lat: 36.969689,
      lng: 128.510094,
      draggable: true
    },
    {
      lat: 36.545029,
      lng: 127.857517,
      draggable: true
    },
    {
      lat: 37.781452,
      lng: 128.5963284,
      draggable: true
    },
    {
      lat:36.849365,
      lng: 128.149563,
      draggable: true
    },
    {
      lat: 34.759923,
      lng: 126.686092,
      draggable: true
    },
    {
      lat: 36.412806,
      lng: 129.189237,
      draggable: true
    },
    {
      lat: 35.313673,
      lng: 127.624721,
      draggable: true
    },
    {
      lat: 37.347371,
      lng: 128.069207,
      draggable: true
    },
    {
      lat: 37.117325,
      lng: 128.933039,
      draggable: true
    },
    {
      lat: 33.381207,
      lng: 126.542284,
      draggable: true
    }

  ]
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  // label?: string;
  draggable: boolean;

}

@NgModule({
  imports: [ BrowserModule, AgmCoreModule.forRoot() ],
  declarations: [ MainMountainComponent ],
  bootstrap: [ MainMountainComponent ]
})
export class AppModule {}
