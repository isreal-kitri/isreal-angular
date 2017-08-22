import { Component, OnInit } from '@angular/core';
import {IsrealService} from "../../service/IsrealService";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {Announce} from "../../domain/announce";

@Component({
  selector: 'announce-regist',
  templateUrl: './announce-regist.component.html',
  styleUrls: ['./announce-regist.component.css']
})
export class AnnounceRegistComponent implements OnInit {

  announce: Announce;

  constructor(
    private isrealService: IsrealService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onSubmit(formValue : any): void {
    console.log(formValue);
    this.isrealService.addAnnounce(formValue).subscribe();
    this.location.back();
  }

}
