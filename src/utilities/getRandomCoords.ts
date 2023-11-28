export const getRandomCoords = () => {
  const maxX = window.innerWidth - 100; // Adjust the width of your element
  const maxY = window.innerHeight - 100; // Adjust the height of your element
  
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  
  return { x, y };
}