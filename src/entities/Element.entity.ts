type ElementType = 'collect' | 'avoid' | 'change'
type ElementColor = 'green' | 'red'
type ElementShape = 'circle' | 'square' | 'rectangle'

export abstract class ElementEntity {
  type: ElementType
  color: ElementColor
  shape: ElementShape
  
  protected constructor(
    type: ElementType,
    color: ElementColor,
    shape: ElementShape,
  ) {
    this.type = type;
    this.color = color;
    this.shape = shape;
  }
  
  onClick() {
  }
}



