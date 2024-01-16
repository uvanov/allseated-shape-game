export const CONFIG = {
  BEHAVIOR_CHANGE_TIME_INTERVAL: 2000,
  AVOID_ELEMENTS_COUNT: 4,
  COLLECT_ELEMENTS_COUNT: 4,
  CHANGE_ELEMENTS_COUNT: 3,
  MAX_COORDINATES_ATTEMPTS: 1000,
  MIN_COORDINATE_DELTA: 100,
  TIME_SYMBOLS_AFTER_DOT: 3,
}

export type ElementType = 'change' | 'avoid' | 'collect';
export type ElementShape = 'rectangle' | 'square' | 'circle';
export type ElementAction = 'bounce'
export type ElementColor = 'green' | 'red'

export interface IElementConstructor {
  type: ElementType,
  shape: ElementShape,
  action?: ElementAction;
}

export const responseFromServer: IElementConstructor[] = [
  {
    type: 'change',
    shape: 'rectangle',
    action: "bounce"
  },
  {
    type: 'change',
    shape: 'circle',
  },
  {
    type: 'avoid',
    shape: 'rectangle',
  },
  {
    type: 'avoid',
    shape: 'circle',
  },
]
