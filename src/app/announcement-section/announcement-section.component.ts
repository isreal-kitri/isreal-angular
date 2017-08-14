import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'announcement-section',
  templateUrl: './announcement-section.component.html',
  styleUrls: ['./announcement-section.component.css']
})
export class AnnouncementSectionComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  gotoDetail(): void {
    this.router.navigate(['/announce']);
  }
}
