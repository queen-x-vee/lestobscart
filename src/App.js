import React from 'react';
import './index.css';
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart';




function App() {
  
  return (
    <>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products:id' element={<About/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      
      {/*<Route exact path='/products:id' element={<Product/>}/>*/}
     </Routes>
      
      
    </>
    
  );
}

export default App;
