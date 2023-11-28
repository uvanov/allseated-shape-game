import {ElementEntity} from "./Element.entity.ts";
import {ScoreEntity} from "./Score.entity.ts";

export class ChangeEntity extends ElementEntity {
  constructor() {
    super("change", 'green', 'circle');
    this.startChangingElement()
  }
  
  onClick = () => {
    console.log(this)
    this.color === 'green' ? ScoreEntity.increase() : ScoreEntity.clear(); // В случае проигрыша ещё редирект
  }
  
  private startChangingElement() {
    setInterval(() => {
      this.color = this.color === 'green' ? 'red' : 'green';
    }, 2000)
  }
}