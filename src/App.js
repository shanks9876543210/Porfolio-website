
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Project from './routes/Project';
import Contact from './routes/Contact';
import About from './routes/About';
import Home from './routes/Home';
function App() {
  return (
 <>

<BrowserRouter>
<Routes>
  <Route path='/' element={ <Home />}/>
  <Route path='/project' element={ <Project />}/>
  <Route path='/contact' element={ <Contact />}/>
  <Route path='/about' element={ <About />}/>

  









</Routes>
</BrowserRouter>


 </>
    
  );
}

export default App;
