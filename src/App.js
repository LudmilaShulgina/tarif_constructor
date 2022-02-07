import React from "react";
import './App.scss';

import {ThemeContextProvider} from "./context";
import {WordsContextProvider} from "./wordsContext";
import TatifConstructor from './components/TatifConstructor'
import Constructor from './components/Constructor'


function App() {
  return (
    <WordsContextProvider>
      <ThemeContextProvider>
        <TatifConstructor/>
        <Constructor/>
      </ThemeContextProvider>
    </WordsContextProvider>
  );
}

export default App;
