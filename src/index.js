import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './Utils/GlobalStyle';

// Provider
export const MyContextForBasenameValue = createContext();
const RootComponent = () => {
  const basename = '/Personnal_Project--CV_en_ligne';
  const [activeCategory, setActiveCategory] = useState('CVC');

  return (
    <React.StrictMode>
      <GlobalStyle >
        <MyContextForBasenameValue.Provider value={{ basename, activeCategory, setActiveCategory }}>
          <BrowserRouter basename={`/${basename}`} >
            <App />
          </BrowserRouter>
        </MyContextForBasenameValue.Provider>
      </GlobalStyle>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
