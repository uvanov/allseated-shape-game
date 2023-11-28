import {useEffect, useState} from "react";
import {ElementEntity} from "./entities/Element.entity.ts";
import {CollectEntity} from "./entities/Collect.entity.ts";
import {AvoidEntity} from "./entities/Avoid.entity.ts";
import {ChangeEntity} from "./entities/Change.entity.ts";
import {Element} from "./components/Element";
import {ScoreEntity} from "./entities/Score.entity.ts";

const BASE_ELEMENTS = [
  new CollectEntity(),
  new CollectEntity(),
  new CollectEntity(),
  new CollectEntity(),
  new AvoidEntity(),
  new AvoidEntity(),
  new AvoidEntity(),
  new AvoidEntity(),
  new AvoidEntity(),
  new ChangeEntity(),
  new ChangeEntity(),
  new ChangeEntity(),
]

export const App = () => {
  
  const [elements, setElemets] = useState<ElementEntity[]>(BASE_ELEMENTS)
  const [, refresh] = useState(false);
  
  useEffect(() => {
    ScoreEntity.initialize();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => refresh(prev => !prev), 2000)
    
    return () => {
      clearInterval(interval)
    }
  }, []);
  
  const onElementClick = (index: number) => {
    console.log(index)
    setElemets(elements.slice(index, index + 1));
  }
  
  return (
    <div>
      {
        elements.map((element, index) => (
          <Element
            key={index}
            {...element}
            onClick={() => {element.onClick; onElementClick(index)}}
          />
        ))
      }
    </div>
  );
};