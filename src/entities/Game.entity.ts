import toast from 'react-hot-toast'
import {ElementEntity} from "./Element.entity.ts";
import {CollectEntity} from "./Collect.entity.ts";
import {AvoidEntity} from "./Avoid.entity.ts";
import {ChangeEntity} from "./Change.entity.ts";
import {TimerEntity} from "./Timer.entity.ts";
import {Coordinates} from './Coordinates.ts';

export class GameEntity {
  elements: ElementEntity[]
  timer: TimerEntity
  coordinates: Coordinates
  
  constructor() {
    this.timer = new TimerEntity();
    this.coordinates = new Coordinates();
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
    this.timer.stopTimer()
    toast.error('Failed');
    
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
  }
  
  removeElement(id: string) {
    this.elements = this.elements.filter(element => element.id !== id);
    if (this.elements.every(element => element.type === 'avoid')) return this.win();
  }
  
  private win() {
    this.timer.stopTimer();
    localStorage.setItem('time', `${this.timer.time}`);
    toast.success(`You won with time ${this.timer.time / 1000} seconds`)
    setTimeout(() => {
      window.location.href = '/win'
    }, 1500)
  }
}

