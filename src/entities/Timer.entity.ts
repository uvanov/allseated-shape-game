export class TimerEntity {
  time: number = 0;
  intervalId: number = 0;
  
  constructor() {
    this.startTimer()
  }
  
  stopTimer() {
    clearInterval(this.intervalId);
  }
  
  private startTimer() {
    const startTime = Date.now();
    
    this.intervalId = setInterval(() => {
      this.time = Date.now() - startTime;
      const timerElement = document.getElementById('timer')
      if(!timerElement) return;
      timerElement.innerText = `${(this.time / 1000).toFixed(3)}`;
    }, 10)
  }
}