import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {StartPage} from "./pages/Start";
import {GamePage} from "./pages/Game";
import {WinPage} from "./pages/Win";

export const App = () => {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/game' element={<GamePage/>}/>
      <Route path='/win' element={<WinPage/>}/>
    </Routes>
  </BrowserRouter>
  );
};