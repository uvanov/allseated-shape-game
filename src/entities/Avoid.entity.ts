import {ElementEntity} from "./Element.entity.ts";
import {GameEntity} from "./Game.entity.ts";
import {ElementAction, ElementShape} from "../game.config.ts";

export class AvoidEntity extends ElementEntity {
  constructor(
    game: GameEntity,
    shape: ElementShape,
    action?: ElementAction,
  ) {
    super(game, "avoid", 'red', shape, action);
  }
  
  onClick = () => {
    this.game.fail();
  }
}