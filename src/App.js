import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegForm from './Components/RegForm';
import Entertainment from './Components/Entertainment';
import Homepage from './Components/Homepage';

function App() {
  return (
    <Routes >
      <Route path='/' element={<RegForm/>} />
      <Route path='/entertainment' element={<Entertainment/>} />
      <Route path='/homepage' element={<Homepage/>} />
    </Routes>
  );
}

export default App;
