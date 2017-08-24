

import {Component, OnInit} from '@angular/core';
import {LatLngLiteral} from "@agm/core";
import {MountainInfo} from "../domain/MountainInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'main-mountain',
  templateUrl: './main-mountain.component.html',
  styleUrls: ['./main-mountain.component.css']
})

export class MainMountainComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  zoom: number = 8;
  title: string = 'My first AGM project';
  lat: number = 36.145029;
  lng: number = 127.857517;

  markerClick() {
    console.log('marker check');
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
    console.log(index);
    console.log(label);
    this.router.navigate(['/main', index]);
  }

  markers: marker[] = [
    {
      lat: 35.808458,
      lng: 128.112730,
      label : '가야산국립공원',
      draggable: true
    },
    {
      lat: 36.357374,
      lng: 127.209145,
      label : '계룡산국립공원',
      draggable: false
    },
    {
      lat: 35.487610,
      lng: 126.869100,
      label : '내장산국립공원',
      draggable: true
    },
    {
      lat: 35.876494,
      lng: 127.756719,
      label : '덕유산국립공원',
      draggable: true
    },
    {
      lat: 35.128229,
      lng: 127.004426,
      label : '무등산국립공원',
      draggable: true
    },
    {
      lat: 35.645374,
      lng: 126.573265,
      label : '변산반도국립공원',
      draggable: true
    },
    {
      lat: 37.676810,
      lng: 126.992706,
      label : '북한산국립공원',
      draggable: true
    },
    {
      lat: 38.144646,
      lng: 128.417001,
      label : '설악산국립공원',
      draggable: true
    },
    {
      lat: 36.969689,
      lng: 128.510094,
      label : '소백산국립공원',
      draggable: true
    },
    {
      lat: 36.545029,
      lng: 127.857517,
      label : '속리산국립공원',
      draggable: true
    },
    {
      lat: 37.781452,
      lng: 128.5963284,
      draggable: true,
      label : '오대산국립공원'
    },
    {
      lat:36.849365,
      lng: 128.149563,
      draggable: true,
      label : '월악산국립공원'
    },
    {
      lat: 34.759923,
      lng: 126.686092,
      draggable: true,
      label : '월출산국립공원'
    },
    {
      lat: 36.412806,
      lng: 129.189237,
      draggable: true,
      label : '주왕산국립공원'
    },
    {
      lat: 35.313673,
      lng: 127.624721,
      draggable: true,
      label : '지리산국립공원'
    },
    {
      lat: 37.347371,
      lng: 128.069207,
      draggable: true,
      label : '치악산국립공원'
    },
    {
      lat: 37.117325,
      lng: 128.933039,
      draggable: true,
      label : '태백산국립공원'
    },
    {
      lat: 33.381207,
      lng: 126.542284,
      draggable: true,
      label : '한라산국립공원'
    }
  ]

}
interface marker {
  lat: number;
  lng: number;
  draggable: boolean;
  label: string;
}

interface ploy {

}
