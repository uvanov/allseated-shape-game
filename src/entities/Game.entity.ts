import {ElementEntity} from "./Element.entity.ts";
import {ScoreEntity} from "./Score.entity.ts";
import {CollectEntity} from "./Collect.entity.ts";
import {AvoidEntity} from "./Avoid.entity.ts";
import {ChangeEntity} from "./Change.entity.ts";

export class GameEntity {
  score: ScoreEntity
  elements: ElementEntity[]
  
  constructor() {
    this.score = new ScoreEntity()
    this.score.initialize()
    this.elements = [
      new CollectEntity(this),
      new CollectEntity(this),
      new CollectEntity(this),
      new CollectEntity(this),
      new AvoidEntity(this),
      new AvoidEntity(this),
      new AvoidEntity(this),
      new AvoidEntity(this),
      new ChangeEntity(this),
      new ChangeEntity(this),
      new ChangeEntity(this),
    ]
  }
  
  fail() {
    this.score.clear();
    alert('fail')
    // Navigate to fail
  }
  
  private win() {
    alert('win')
    // Navigate to win
  }
  
  removeElement(id: string) {
    this.elements = this.elements.filter(element => element.id !== id);
    if(this.elements.every(element => element.type === 'avoid')) return this.win();
  }
}

