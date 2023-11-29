import {ComponentProps, FC} from "react";


export const Button: FC<ComponentProps<'button'>> = (
  {
    children,
    ...rest
  }
) => {
  return (
    <button
      className='bg-primary text-black py-5 px-10 rounded-xl font-bold hover:scale-110 transition-transform active:scale-90'
      {...rest}
    >
      {children}
    </button>
  );
};