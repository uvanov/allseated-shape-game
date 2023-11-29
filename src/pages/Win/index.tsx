import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import toast from 'react-hot-toast';
import {useScoreboard} from "./hooks/useScoreboard.ts";
import {Button} from "@components/Button";
import {supabase} from "../../supabase.config.ts";

export const WinPage = () => {
  const [record, setRecord] = useState(0);
  const [name, setName] = useState('')
  
  const {
    scoreboard,
    refetch
  } = useScoreboard()
  
  useEffect(() => {
    const time = localStorage.getItem('time');
    
    if (time) {
      setRecord(+time)
    } else {
      setTimeout(() => {
        toast.error('Oops. I can\'t find your time');
      }, 0)
    }
  }, []);
  
  const onSubmit = useCallback(async () => {
    if (name.length < 0) return toast('Enter your name');
    
    await supabase.from('records').insert({
      name,
      time: +record
    })
    
    localStorage.setItem('time', '0');
    setName('')
    setRecord(0)
    toast.success('Your time was registered.')
    refetch()
  }, [name, record])
  
  return (
    <div className='w-full h-full flex flex-col gap-8 items-center justify-center'>
      <div className='p-10 border-2 border-gray-200 rounded-2xl'>
        {scoreboard.map((score, index) => (
          <div key={score.id} className='flex items-center gap-20 justify-between'>
            <div>
              <span className='text-gray-300'>
                {index + 1}.&nbsp;
              </span>
              <span>
                {score.name}
              </span>
            </div>
            <span>
              {score.time / 1000}s
            </span>
          </div>
        ))}
      </div>
      {
        !!record ?
          (
            <>
              <h2 className='text-2xl'>
                Your record {record / 1000}s
              </h2>
              <input
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
                className='border-2 border-gray-200 p-5 rounded-xl'
                placeholder='Enter your name'
              />
              <Button onClick={onSubmit}>
                Submit
              </Button>
            </>
          ) : (
            <Link to='/' className='text-blue-400 text-xl'>
              Re-play
            </Link>
          )
      }
    </div>
  );
};