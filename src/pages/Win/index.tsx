import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {supabase} from "../../supabase.config.ts";
import {ScoreboardItem} from "./Win.types.ts";
import {useScoreboard} from "./hooks/useScoreboard.ts";

export const WinPage = () => {
  
  const [record, setRecord] = useState(0);
  const [name, setName] = useState('')
  const navigate = useNavigate()
  
  const scoreboard = useScoreboard()
  
  useEffect(() => {
    const time = localStorage.getItem('time');
    if (!time) return navigate('/');
    setRecord(+time)
  }, []);
  
  const onSubmit = useCallback(async () => {
    if (!name.length) return alert('Enter your name');
    
    await supabase.from('records').insert({
      name,
      time: +record
    })
    
    localStorage.setItem('time', '0');
    setName('')
    alert('Your record was sent')
  }, [name])
  
  return (
    <div className='w-full h-full flex flex-col gap-10 items-center justify-center'>
      <div className='p-10 border-2 border-gray-400'>
        {scoreboard.map(score => (
          <div key={score.id} className='flex items-center gap-20 justify-between'>
            <span>
              {score.name}
            </span>
            <span>
              {score.time / 1000}s
            </span>
          </div>
        ))}
      </div>
      <h2 className='text-3xl'>
        Your record {record}s
      </h2>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        className='border-2 border-gray-400 p-2 text-2xl'
        placeholder='Enter your name'
      />
      <button className='border-2 border-gray-400 p-2 rounded-2xl' onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};