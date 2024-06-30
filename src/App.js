// import { About } from './About';
// import './App.css';
// import Image from './Image';


// function App() {
//   return (
//         <>
        
//         <h1>hello</h1>

//         <About/>
//         <Image/>

        
        
//         </>
//   );
// }

// export default App;






import React, { useEffect } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages






import { About } from './About';
import Image from './Image';
import Home from './Home';
import Navbar from './Navbar';



function App() {
  

  return (
    <>
      <Router>
       <Navbar/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/imag" element={<Image />} />
            <Route path="/abouts" element={<About />} />
            
          </Routes>
      
      </Router>
    </>
  );
}


export default App;

