import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegForm from './Components/RegForm';
import Entertainment from './Components/Entertainment';
import Homepage from './Components/Homepage';
import FinalMovies from './Components/FinalMovies'
function App() {
  return (
    <Routes >
      <Route path='/' element={<RegForm/>} />
      <Route path='/entertainment' element={<Entertainment/>} />
      <Route path='/homepage' element={<Homepage/>} />
      <Route path='/movies' element={<FinalMovies />} />
    </Routes>
  );
}

export default App;
