import {ElementEntity} from "./Element.entity.ts";
import {GameEntity} from "./Game.entity.ts";

export class AvoidEntity extends ElementEntity {
  constructor(game: GameEntity) {
    super("avoid", 'red', 'square', game);
  }
  
  onClick = () => {
    this.game.fail();
  }
}