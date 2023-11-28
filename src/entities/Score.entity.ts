export class ScoreEntity {
  
  initialize() {
    localStorage.setItem('score', '0')
  }
  
  increase() {
    const score = localStorage.getItem('score');
    if (!score) return;
    
    localStorage.setItem('score', `${parseInt(score) + 1}`)
  }
  
  clear() {
    this.initialize();
  }
}