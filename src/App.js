import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des routes 
import Error from './Pages/Error';
import Home from './Pages/Home';
import CV from './Pages/CV';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {

  // Prop basename 
  const basename = "/Personnal_Project--CV_en_ligne";

  return (
    <BrowserRouter basename="/Personnal_Project--CV_en_ligne" >
      <Routes>
        <Route path="*" element={<Error basename={basename} />} />
        <Route path="/" element={<Home basename={basename} />} />
        <Route path="/Error" element={<Error basename={basename} />} />
        <Route path="/Projects" element={<Projects basename={basename} />} />
        <Route path="/CV" element={<CV basename={basename} />} />
        <Route path="/Contact" element={<Contact basename={basename} />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
