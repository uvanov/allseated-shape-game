import {ElementEntity} from "./Element.entity.ts";
import {ScoreEntity} from "./Score.entity.ts";

export class AvoidEntity extends ElementEntity {
  constructor() {
    super("avoid", 'red', 'square');
  }
  
  onClick = () => {
    console.log(this)
    ScoreEntity.clear();
    // Redirect to fail
  }
}