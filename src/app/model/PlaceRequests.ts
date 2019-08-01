import {Place} from './Place';
import {User} from './User';

export class PlaceRequests {
  id: number;
  approved: boolean;
  managerId: number;
  username: string;
  place: Place;
  user: User;
  description: string;

  constructor(id: number, approved: boolean, managerId: number, username: string, place: Place, user: User, description: string) {
    this.id = id;
    this.approved = approved;
    this.managerId = managerId;
    this.username = username;
    this.place = place;
    this.user = user;
    this.description = description;
  }
}
