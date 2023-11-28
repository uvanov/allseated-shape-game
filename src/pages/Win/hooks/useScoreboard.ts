import {useEffect, useState} from "react";
import {supabase} from "../../../supabase.config.ts";
import {ScoreboardItem} from "../Win.types.ts";

export const useScoreboard = () => {
  const [scoreboard, setScoreboard] = useState<ScoreboardItem[]>([])
  
  useEffect(() => {
    const getScored = async () => {
      const {data, error} = await supabase
        .from('records')
        .select()
        .order('time', {ascending: true})
        .returns<ScoreboardItem[]>();
      
      if(!data) return console.error(error);
      setScoreboard(data)
    }
    
    getScored()
  }, []);
  
  return scoreboard
}