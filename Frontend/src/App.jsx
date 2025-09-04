import React from 'react';
import Home from './service/Home';
import HealthChat from './service/HealthChat';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
const App = () => {
  return (
 
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/assisten' element={<HealthChat/>}/>
      <Route path='/contact' element= {<Contact/>}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;