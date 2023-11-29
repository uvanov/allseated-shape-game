import {CONFIG} from "../game.config.ts";

export interface Coordinate {
  x: number;
  y: number;
}


export class Coordinates {
  private occupied: Coordinate[] = [];
  
  generateRandomCoordinates(): Coordinate {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    for (let attempt = 0; attempt < CONFIG.MAX_COORDINATES_ATTEMPTS; attempt++) {
      const coordinate: Coordinate = {
        x: Math.floor(Math.random() * (width - 300)), // Adjust width of elements
        y: Math.floor(Math.random() * (height - 300)), // Adjust height of elements
      };
      
      if (!this.isCoordinateOccupied(coordinate)) {
        this.occupied.push(coordinate);
        return coordinate;
      }
    }
    
    return { x: 0, y: 0 };
  }
  
  private isCoordinateOccupied(coordinate: Coordinate): boolean {
    for (const occupiedCoordinate of this.occupied) {
      const xOverlap = Math.abs(coordinate.x - occupiedCoordinate.x) < CONFIG.MIN_COORDINATE_DELTA; // Adjust overlap threshold
      const yOverlap = Math.abs(coordinate.y - occupiedCoordinate.y) < CONFIG.MIN_COORDINATE_DELTA; // Adjust overlap threshold
      
      if (xOverlap && yOverlap) {
        return true; // Coordinate is occupied
      }
    }
    
    return false; // Coordinate isn't occupied
  }
}
