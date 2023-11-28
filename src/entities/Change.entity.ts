import {ElementEntity} from "./Element.entity.ts";

export class ChangeEntity extends ElementEntity {
  constructor() {
    super("change", 'green', 'circle');
    this.startChangingElement()
  }
  
  onClick() {
    alert('Success!')
  }
  
  private startChangingElement() {
    setInterval(() => {
      this.color = this.color === 'green' ? 'red' : 'green';
    }, 2000)
  }
}