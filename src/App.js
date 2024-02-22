import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des routes 
import Error from './Pages/Error';
import Home from './Pages/Home';
import CV from './Pages/CV';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/Personnal_Project--CV_en_ligne">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
