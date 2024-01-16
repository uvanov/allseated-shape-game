import {ElementEntity} from "./Element.entity.ts";
import {GameEntity} from "./Game.entity.ts";
import {ElementAction, ElementShape} from "../game.config.ts";

export class CollectEntity extends ElementEntity {
  constructor(
    game: GameEntity,
    shape: ElementShape,
    action?: ElementAction,
  ) {
    super(game, "collect", 'green', shape, action);
  }
  
  onClick = () => {
    this.game.removeElement(this.id)
  }
}