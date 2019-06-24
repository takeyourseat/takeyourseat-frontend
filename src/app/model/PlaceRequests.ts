export class PlaceRequests {
  id: number;
  approved: boolean;
  managerId: number;
  placeId: number;
  userId: number

  constructor(id: number, approved: boolean, managerId: number, placeId: number, userId: number) {
    this.id = id;
    this.approved = approved;
    this.managerId = managerId;
    this.placeId = placeId;
    this.userId = userId;
  }
}