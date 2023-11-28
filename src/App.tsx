import {useEffect, useState} from "react";
import {ElementEntity} from "./entities/Element.entity.ts";
import {CollectEntity} from "./entities/Collect.entity.ts";
import {AvoidEntity} from "./entities/Avoid.entity.ts";
import {ChangeEntity} from "./entities/Change.entity.ts";

const BASE_ELEMENTS = [
  new CollectEntity(),
  new AvoidEntity(),
  new ChangeEntity()
]

export const App = () => {
  
  const [elements, setElemets] = useState<ElementEntity[]>(BASE_ELEMENTS)
  const [, refresh] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => refresh(prev => !prev), 2000)
    
    return () => {
      clearInterval(interval)
    }
  }, []);
  
  return (
    <div>
      {
        elements.map(element => (
          <div className={`w-16 h-16 bg-${element.color}-600`}/>
        ))
      }
    </div>
  );
};