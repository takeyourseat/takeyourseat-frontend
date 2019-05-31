import { Office } from './Office';

export class Place {
  id: number;
  coordinateX: number;
  coordinateY: number;
  floor: number;
  description: string;
  office: Office;

  constructor(id: number, coordinateX: number, coordinateY: number, office: Office) {
    this.id = id;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.office = office;
  }
}

