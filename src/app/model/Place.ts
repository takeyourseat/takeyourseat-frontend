import { Office } from './Office';

export class Place {
  id: number;
  coordinateX: number;
  coordinateY: number;
  office: Office;
  username: string;
  isAvailable: boolean;

  constructor(id: number, coordinateX: number, coordinateY: number, office: Office, username: string) {
    this.id = id;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.office = office;
    this.username = username;
  }
}

