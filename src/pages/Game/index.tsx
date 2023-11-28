import {useEffect, useState} from "react";
import {GameEntity} from "../../entities/Game.entity.ts";
import {Element} from "../../components/Element";

export const GamePage = () => {
  const [game] = useState(new GameEntity())
  const [, refresh] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => refresh(prev => !prev), 100)
    
    return () => {
      clearInterval(interval)
    }
  }, []);
  
  return (
    <div>
      {
        game.elements.map((element) => (
          <Element
            key={element.id}
            {...element}
            onClick={element.onClick}
          />
        ))
      }
    </div>
  );
};