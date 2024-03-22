import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MyContextForBasenameValue } from './index';

// Importation des routes 
import Error from './Pages/Error';
import Home from './Pages/Home';
import CV from './Pages/CV';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {

  // Prop basename 
  const basename = useContext(MyContextForBasenameValue);

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
