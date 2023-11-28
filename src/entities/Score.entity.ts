export class ScoreEntity {
  
  static initialize() {
    localStorage.setItem('score', '0')
  }
  
  static increase() {
    const score = localStorage.getItem('score');
    if (!score) return;
    
    localStorage.setItem('score', `${parseInt(score) + 1}`)
  }
  
  static clear() {
    this.initialize();
  }
}