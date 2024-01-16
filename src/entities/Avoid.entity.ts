import {ElementEntity} from "./Element.entity.ts";
import {ElementAction, ElementShape, ILimitedGame} from "../game.config.ts";

export class AvoidEntity extends ElementEntity {
  constructor(
    game: ILimitedGame,
    shape: ElementShape,
    action?: ElementAction,
  ) {
    super(game, "avoid", 'red', shape, action);
  }
  
  onClick = () => {
    this.game.fail();
  }
}