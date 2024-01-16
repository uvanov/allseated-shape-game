import {IElementConstructor} from "../game.config.ts";
import {CollectEntity} from "@entities/Collect.entity.ts";
import {GameEntity} from "@entities/Game.entity.ts";
import {AvoidEntity} from "@entities/Avoid.entity.ts";
import {ChangeEntity} from "@entities/Change.entity.ts";


const FACTORY_MAP = {
  change: ChangeEntity,
  collect: CollectEntity,
  avoid: AvoidEntity,
}

export class ElementsFactory {
  
  constructor(private game: GameEntity) {
  }
  
   createElements(elements: IElementConstructor[]) {
    return elements.map(element => {
      
      if(!FACTORY_MAP[element.type]) {
        throw new Error(`There is no class for ${element.type} element`)
      }
      
      return new FACTORY_MAP[element.type](
        this.game,
        element.shape,
        element.action
      )
    })
  }
}