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
    private isrealServece: IsrealService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isrealServece.getAnnounces()
      .subscribe(data => this.announces= data);
  }

  onSelect(announce: Announce): void {
    this.selectedAnnounce = announce;
  }

  DetailAnnounce(): void {
    this.router.navigate(['/announce', this.selectedAnnounce.post_seq]);
  }

  RegistAnnounce(): void {
    this.router.navigate(['announce/regist']);
  }

}
