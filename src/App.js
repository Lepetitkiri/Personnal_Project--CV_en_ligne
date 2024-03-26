import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importation des routes 
import Error from './Pages/Error';
import Home from './Pages/Home';
import CV from './Pages/CV';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="" element={<Home />} />
      <Route exact path="/CV" element={<CV />} />
      <Route exact path="/Projects" element={<Projects />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}


export default App;
