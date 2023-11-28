import {ElementEntity} from "./Element.entity.ts";

export class AvoidElementEntity extends ElementEntity {
  constructor() {
    super("avoid", 'red', 'square');
  }
  
  onClick() {
    alert('Fail!')
  }
}