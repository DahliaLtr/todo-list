import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Timer from './Pages/Timer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Timer' exact element={<Timer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
