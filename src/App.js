
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Navbar from './components/Navbar';

function App() {

  
  return (
    <BrowserRouter>
     <Navbar/>
    <div className="App">
    <Routes>
      
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
