import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Announce} from "../domain/announce";
import {IsrealService} from "../service/IsrealService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'announce-detail',
  templateUrl: './announce-detail.component.html',
  styleUrls: ['./announce-detail.component.css']
})
export class AnnounceDetailComponent implements OnInit {

  announce: Announce;

  constructor(
    private isrealService: IsrealService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.isrealService.getAnnounce(this.route.snapshot.params['post_seq']).subscribe(data => {
      this.announce = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
