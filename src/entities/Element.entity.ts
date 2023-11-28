import {GameEntity} from "./Game.entity.ts";
import {v4 as uuid} from 'uuid'

type ElementType = 'collect' | 'avoid' | 'change'
type ElementColor = 'green' | 'red'
type ElementShape = 'circle' | 'square' | 'rectangle'

export class ElementEntity {
  id: string;
  
  protected constructor(
    public type: ElementType,
    public color: ElementColor,
    public shape: ElementShape,
    protected game: GameEntity
  ) {
    this.id = uuid()
  }
  
  onClick() {}
}



