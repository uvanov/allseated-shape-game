import {ElementEntity} from "./Element.entity.ts";
import {GameEntity} from "./Game.entity.ts";

export class CollectEntity extends ElementEntity {
  constructor(game: GameEntity) {
    super("collect", 'green', 'rectangle', game);
  }
  
  onClick = () => {
    this.game.removeElement(this.id)
  }
}