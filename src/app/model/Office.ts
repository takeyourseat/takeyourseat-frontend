export class Office {
  id: number;
  sizeX: number;
  sizeY: number;
  floor: number;
  description: string;
  number: number;

  constructor(id: number, sizeX: number, sizeY: number, description: string, officeNumber: number) {
    this.id = id;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.description = description;
    this.number = officeNumber;
  }
}
