import {Link} from 'react-router-dom';
import {Button} from '@components/Button';

export const StartPage = () => {
  
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Link to='/game'>
        <Button>
          Start Playing
        </Button>
      </Link>
    </div>
  );
};