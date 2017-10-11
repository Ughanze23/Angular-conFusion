import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {LeaderService} from '../services/leader.service';
import {Featured} from '../shared/featured';
import {FLEADER} from '../shared/fleader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fleader: Featured [];
  leaders: Leader [];

  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
  this.leaders = this.leaderservice.getLeader();
  this.fleader = this.leaderservice.getFeaturedLeader();
}

}
