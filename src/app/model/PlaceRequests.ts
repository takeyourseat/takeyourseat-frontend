import {Place} from './Place';
import {User} from './User';

export class PlaceRequests {
  id: number;
  approved: boolean;
  managerId: number;
  placeId: number;
  userId: number;
  place: Place;
  user: User;

  constructor(id: number, approved: boolean, managerId: number, placeId: number, userId: number, place: Place, user: User) {
    this.id = id;
    this.approved = approved;
    this.managerId = managerId;
    this.placeId = placeId;
    this.userId = userId;
    this.place = place;
    this.user = user;
  }
}
