import { Office } from './Office';

export class Place {
  id: number;
  coordinateX: number;
  coordinateY: number;
  floor: number;
  description: string;
  office: Office;
  userId: number;

  constructor(id: number, coordinateX: number, coordinateY: number, office: Office, userId: number) {
    this.id = id;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.office = office;
    this.userId = userId;
  }
}

