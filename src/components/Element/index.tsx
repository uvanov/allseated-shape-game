import {FC} from "react";
import {clsx} from "clsx";
import {ElementEntity} from "@entities/Element.entity";

export const Element: FC<Omit<ElementEntity, 'game'>> = (
  {
    color,
    shape,
    onClick,
    coordinates,
    action,
  }
) => {
  
  const classes = clsx(
    'absolute',
    'h-16',
    'cursor-pointer',
    color === 'red' ? 'bg-rose-600' : 'bg-teal-500',
    shape === 'rectangle' ? 'w-28' : 'w-16',
    shape === 'circle' && 'rounded-full',
    action && action
  )
  
  return (
    <div
      style={{ top: coordinates.y, left: coordinates.x }}
      className={classes}
      onClick={onClick}
    />
  );
};