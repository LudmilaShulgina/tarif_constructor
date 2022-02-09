import './App.scss';

import {ThemeContextProvider} from "./context";
import TatifConstructor from './components/TatifConstructor'
import Constructor from './components/Constructor'
import * as React from "react";


function App() {
  return (
      <ThemeContextProvider>
        <TatifConstructor/>
        <Constructor/>
      </ThemeContextProvider>
  );
}

export default App;
