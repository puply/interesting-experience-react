import './App.css';
import Header from './Header/Header';
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';
import Gifts from './components/Gifts/Gifts';
import Cards from './components/Cards/Cards';
import Contactus from './components/Contactus.jsx/Contactus';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className='App'>
      
    
    <Router>
     <Header/>
      <Routes>
          <Route path="/Hero" element={<Hero/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/gifts" element={<Gifts/>}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
