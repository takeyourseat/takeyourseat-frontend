export class Place {
  id: number;
  number: number;
  coordinateX: number;
  coordinateY: number;
  floor: number;
  description: string;
  office: {
    description: string,
    floor: number,
    id: number,
    number: number,
    sizeX: number,
    sizeY: number
  }

  constructor(id: number, number: number, coordinateX: number, coordinateY: number, floor: number, description: string) {
    this.id = id;
    this.number = number;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.floor = floor;
    this.description = description;
  }
}

