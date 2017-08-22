import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Announce} from "../domain/announce";
import {IsrealService} from "../service/IsrealService";

@Component({
  selector: 'announcement-section',
  templateUrl: './announcement-section.component.html',
  styleUrls: ['./announcement-section.component.css']
})
export class AnnouncementSectionComponent implements OnInit {

  announces: Announce[];

  constructor(
    private isrealService: IsrealService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isrealService.getTop4Announces().subscribe(data => {
      this.announces = data;
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/announce']);
  }
}
