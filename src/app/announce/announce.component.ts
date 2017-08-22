import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IsrealService} from "../service/IsrealService";
import {Announce} from "../domain/announce";

@Component({
  selector: 'announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  announces: Announce[];
  selectedAnnounce: Announce;

  constructor(
    private isrealService: IsrealService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isrealService.getAnnounces()
      .subscribe(data => this.announces= data);
  }

  DetailAnnounce(announce: Announce): void {
    this.selectedAnnounce = announce;
    this.router.navigate(['/announce', this.selectedAnnounce.post_seq]);
  }

  RegistAnnounce(): void {
    this.router.navigate(['announce/regist']);
  }

}
