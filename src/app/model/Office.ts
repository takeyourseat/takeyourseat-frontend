export class Office {
  id: number;
  sizeX: number;
  sizeY: number;
  floor: number;
  description: string;

  constructor(id: number, sizeX: number, sizeY: number, description: string) {
    this.id = id;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.description = description;
  }
}