import {FC, useState} from "react";
import {ElementEntity} from "../../entities/Element.entity.ts";
import {clsx} from "clsx";
import {getRandomCoords} from "../../utilities/getRandomCoords.ts";



export const Element: FC<Omit<ElementEntity, 'game'>> = (
  {
    color,
    shape,
    onClick,
  }
) => {
  
  const [coordinates] = useState(getRandomCoords());
  
  const classes = clsx(
    'absolute',
    `bg-${color}-600`,
    'h-16',
    shape === 'rectangle' ? 'w-28' : 'w-16',
    shape === 'circle' && 'rounded-full'
  )
  
  return (
    <div
      className={classes}
      style={{ top: coordinates.y + 'px', left: coordinates.x + 'px' }}
      onClick={onClick}
    />
  );
};