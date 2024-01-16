import {ElementEntity} from "./Element.entity.ts";
import {ElementAction, ElementShape, ILimitedGame} from "../game.config.ts";

export class CollectEntity extends ElementEntity {
  constructor(
    game: ILimitedGame,
    shape: ElementShape,
    action?: ElementAction,
  ) {
    super(game, "collect", 'green', shape, action);
  }
  
  onClick = () => {
    this.game.removeElement(this.id)
  }
}