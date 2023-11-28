import {ElementEntity} from "./Element.entity.ts";
import {ScoreEntity} from "./Score.entity.ts";

export class CollectEntity extends ElementEntity {
  constructor() {
    super("collect", 'green', 'rectangle');
  }
  
  onClick = () => {
    console.log(this)
    ScoreEntity.increase();
  }
}