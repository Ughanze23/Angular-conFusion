import { Component, OnInit } from '@angular/core';

import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {LeaderService} from '../services/leader.service';
import {Featured} from '../shared/featured';
import {FLEADER} from '../shared/fleader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fleader: Featured [];
   dish: Dish;
   promotion: Promotion;

  constructor(private dishservice: DishService,
              private promotionservice: PromotionService,
              private leaderservice: LeaderService ) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.fleader = this.leaderservice.getFeaturedLeader();
  }

}
