export class ScoreEntity {
  
  initialize() {
    console.log('init')
    localStorage.setItem('score', '0')
  }
  
  increase() {
    console.log('increase')
    const score = localStorage.getItem('score');
    if (score === null) return;
    
    localStorage.setItem('score', `${parseInt(score) + 1}`)
  }
  
  clear() {
    console.log('clear')
    this.initialize();
  }
}