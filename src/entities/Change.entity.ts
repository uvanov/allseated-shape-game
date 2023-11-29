import {ElementEntity} from "./Element.entity.ts";
import {GameEntity} from "./Game.entity.ts";
import {CONFIG} from "../game.config.ts";

export class ChangeEntity extends ElementEntity {
  constructor(game: GameEntity) {
    super("change", 'green', 'circle', game);
    this.startChangingElement()
  }
  
  onClick = () => {
    if(this.color === 'green') {
      this.game.removeElement(this.id)
    } else {
      this.game.fail()
    }
  }
  
  private startChangingElement() {
    setInterval(() => {
      this.color = this.color === 'green' ? 'red' : 'green';
    }, CONFIG.BEHAVIOR_CHANGE_TIME_INTERVAL)
  }
}