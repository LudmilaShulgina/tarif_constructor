import React from "react";
import './App.scss';

import {ThemeContextProvider} from "./context";
import TatifConstructor from './components/TatifConstructor'
import Constructor from './components/Constructor'


function App() {
  return (
    <ThemeContextProvider>
      <TatifConstructor/>
      <Constructor/>
    </ThemeContextProvider>
  );
}

export default App;
