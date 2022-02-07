import React, { useState, useEffect } from "react";
const WordsContext = React.createContext();

function WordsContextProvider(props) {
  const [words, setWords] = useState([]);

  useEffect(()=>{
    getWords();
    //saveWord();
  },[])

  const getWords = () => {
    fetch('/api/words')
      .then((response) => response.json())
      .then((response) => setWords({ words: response }))
  }

  const saveWord = () => {

    const new_word={
      english: "test",
      russian: "тест",
      tags: "common",
      tags_json: "[\"u0442u0440u044fu043c\"]",
      transcription: "[test]"
    }

    fetch('/api/words/add', {
      method: 'POST',
      body: JSON.stringify(new_word),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => console.log(36,res));
  }

  return (
    <WordsContext.Provider value={{ words, getWords, saveWord }}>
      {props.children}
    </WordsContext.Provider>

  );
}

export { WordsContextProvider, WordsContext };