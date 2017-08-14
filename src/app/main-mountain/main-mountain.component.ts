

import {Component, ElementRef, OnInit, Renderer} from '@angular/core';

@Component({
  selector: 'main-mountain',
  templateUrl: './main-mountain.component.html',
  styleUrls: ['./main-mountain.component.css']
})
export class MainMountainComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

}
