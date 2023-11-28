import {ElementEntity} from "./Element.entity.ts";

export class AvoidEntity extends ElementEntity {
  constructor() {
    super("avoid", 'red', 'square');
  }
  
  onClick() {
    alert('Fail!')
  }
}