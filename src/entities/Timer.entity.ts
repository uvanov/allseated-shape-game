import {formatTime} from "@utils/formatTime.ts";

export class TimerEntity {
  time: number = 0;
  intervalId: NodeJS.Timeout | null = null;
  
  constructor() {
    this.startTimer()
  }
  
  stopTimer() {
    if(!this.intervalId) return;
    clearInterval(this.intervalId);
  }
  
  private startTimer() {
    const startTime = Date.now();
    
    this.intervalId = setInterval(() => {
      this.time = Date.now() - startTime;
      const timerElement = document.getElementById('timer')
      if(!timerElement) return;
      timerElement.innerText = `${formatTime(this.time)}`;
    }, 10)
  }
}