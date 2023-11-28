import {Link} from "react-router-dom";

export const StartPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Link to='/game'>
        <button className='bg-emerald-300 py-5 px-10 rounded-2xl font-bold'>
          НАЧАТЬ ИГРАТЬ
        </button>
      </Link>
    </div>
  );
};