import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {Featured} from '../shared/featured';
import {FLEADER} from '../shared/fleader';

@Injectable()
export class LeaderService {

  getLeader(): Leader[] {
    return LEADERS;
  }

  getFeaturedLeader(): Featured[] {
    return FLEADER;
  }
  constructor() { }

}
