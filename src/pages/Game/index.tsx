import {useEffect, useState} from "react";
import {GameEntity} from "../../entities/Game.entity.ts";
import {Element} from "../../components/Element";

const gameInstance = new GameEntity()

export const GamePage = () => {
  const [game] = useState(gameInstance)
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
      <span id="timer" className='absolute top-5 right-5 text-2xl'></span>
    </div>
  );
};