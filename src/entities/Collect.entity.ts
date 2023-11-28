import {ElementEntity} from "./Element.entity.ts";

export class CollectEntity extends ElementEntity {
  constructor() {
    super("collect", 'green', 'rectangle');
  }
  
  onClick() {
    const score = parseInt(localStorage.getItem('score')!) || 0
    localStorage.setItem('score', `${score + 1}`)
  }
}