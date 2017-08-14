import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'bbs-section',
  templateUrl: './bbs-section.component.html',
  styleUrls: ['./bbs-section.component.css']
})
export class BbsSectionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoDetail(): void {
    this.router.navigate(['/bbs']);
  }
}
