import toast from 'react-hot-toast'
import {ElementEntity} from "./Element.entity.ts";
import {TimerEntity} from "./Timer.entity.ts";
import {Coordinates} from './Coordinates.ts';
import {IElementConstructor} from "../game.config.ts";
import {ElementsFactory} from "@entities/EntityFactory.entity.ts";

export class GameEntity {
  elements: ElementEntity[]
  timer: TimerEntity
  coordinates: Coordinates
  
  constructor(elements: IElementConstructor[]) {
    this.timer = new TimerEntity();
    this.coordinates = new Coordinates();
    this.elements = [
      ...new ElementsFactory(this).createElements(elements)
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
  
   win() {
    this.timer.stopTimer();
    localStorage.setItem('time', `${this.timer.time}`);
    toast.success(`You won with time ${this.timer.time / 1000} seconds`)
    setTimeout(() => {
      window.location.href = '/win'
    }, 1500)
  }
}

