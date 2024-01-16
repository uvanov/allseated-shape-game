import {ElementEntity} from "./Element.entity.ts";
import {CONFIG, ElementAction, ElementShape, ILimitedGame} from "../game.config.ts";

export class ChangeEntity extends ElementEntity {
  constructor(
    game: ILimitedGame,
    shape: ElementShape,
    action?: ElementAction,
  ) {
    super(game, "change", 'green', shape, action);
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