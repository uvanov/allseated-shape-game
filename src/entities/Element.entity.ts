import {GameEntity} from "./Game.entity.ts";
import {v4 as uuid} from 'uuid'
import {Coordinate} from "@entities/Coordinates.ts";

type ElementType = 'collect' | 'avoid' | 'change'
type ElementColor = 'green' | 'red'
type ElementShape = 'circle' | 'square' | 'rectangle'

export class ElementEntity {
  id: string;
  coordinates: Coordinate
  
  protected constructor(
    public type: ElementType,
    public color: ElementColor,
    public shape: ElementShape,
    protected game: GameEntity
  ) {
    this.id = uuid()
    this.coordinates = this.game.coordinates.generateRandomCoordinates();
  }
  
  onClick() {}
}



