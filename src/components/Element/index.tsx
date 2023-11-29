import {FC, useState} from "react";
import {clsx} from "clsx";
import {ElementEntity} from "@entities/Element.entity";
import {getRandomCoords} from "@utils/getRandomCoords";

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
    'h-16',
    'cursor-pointer',
    color === 'red' ? 'bg-rose-600' : 'bg-teal-500',
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