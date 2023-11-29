import {useCallback, useEffect, useState} from "react";
import {supabase} from "../../../supabase.config.ts";
import {ScoreboardItem} from "../Win.types.ts";

export const useScoreboard = () => {
  const [scoreboard, setScoreboard] = useState<ScoreboardItem[]>([])
  
  const fetchScoreboard = useCallback(async () => {
    const {data, error} = await supabase
      .from('records')
      .select()
      .order('time', {ascending: true})
      .limit(10)
      .returns<ScoreboardItem[]>();
    
    if(!data) return console.error(error);
    setScoreboard(data)
  }, [])
  
  useEffect(() => {
    fetchScoreboard()
  }, []);
  
  return {
    scoreboard,
    refetch: fetchScoreboard
  }
}