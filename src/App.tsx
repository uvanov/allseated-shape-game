import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {StartPage} from "./pages/Start";
import {GamePage} from "./pages/Game";
export const App = () => {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/game' element={<GamePage/>}/>
    </Routes>
  </BrowserRouter>
  );
};