import {v4 as uuid} from 'uuid'
import {Coordinate} from "@entities/Coordinates.ts";
import {ElementAction, ElementColor, ElementShape, ElementType, ILimitedGame} from "../game.config.ts";


export class ElementEntity {
  protected constructor(
    protected game: ILimitedGame,
    public type: ElementType,
    public color: ElementColor,
    public shape: ElementShape,
    public action?: ElementAction
  ) {
    this.id = uuid()
    this.coordinates = this.game.coordinates.generateRandomCoordinates();
  }
  id: string;
  
  coordinates: Coordinate
  
  onClick() {}
}



