import {useCallback, useEffect, useState} from 'react';
import {GameEntity} from '@entities/Game.entity.ts';
import {Element} from '@components/Element';
import {fetchElements} from "@utils/fetchElements.ts";


export const GamePage = () => {
  const [game, setGame] = useState<GameEntity>()
  const [, refresh] = useState(false);
  
  const initializeGame = useCallback(async () => {
    const elements = await fetchElements();
    setGame(new GameEntity(elements))
  }, [])
  
  useEffect(() => {
    initializeGame()
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => refresh(prev => !prev), 100)
    
    return () => {
      clearInterval(interval)
    }
  }, []);
  
  return (
    <div>
      {
        game && game.elements.map((element) => {
          return (
            <Element
              {...element}
              onClick={element.onClick}
            />
          )
        })
      }
      <span id="timer" className='absolute top-5 right-5 text-2xl'></span>
    </div>
  );
};