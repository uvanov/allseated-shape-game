import {ElementEntity} from "./Element.entity.ts";
import {ScoreEntity} from "./Score.entity.ts";
import {CollectEntity} from "./Collect.entity.ts";
import {AvoidEntity} from "./Avoid.entity.ts";
import {ChangeEntity} from "./Change.entity.ts";
import {TimerEntity} from "./Timer.entity.ts";

export class GameEntity {
  score: ScoreEntity
  elements: ElementEntity[]
  timer: TimerEntity
  
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
    this.timer = new TimerEntity();
  }
  
  fail() {
    this.score.clear();
    this.timer.stopTimer()
    alert('Failed')
    window.location.href = '/'
  }
  
  removeElement(id: string) {
    this.elements = this.elements.filter(element => element.id !== id);
    if (this.elements.every(element => element.type === 'avoid')) return this.win();
  }
  
  private win() {
    this.timer.stopTimer();
    localStorage.setItem('time', `${this.timer.time}`);
    alert(`You won with time ${this.timer.time / 1000} seconds`)
    window.location.href = '/win'
  }
}

