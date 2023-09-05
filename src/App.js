import React from 'react';
import Create from './Components/Create';
import Read from './Components/Read';
import {Routes,Route} from 'react-router-dom';
import Update from './Components/Update';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
  
  )
}

export default App