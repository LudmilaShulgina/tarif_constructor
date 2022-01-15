import React, {useState, useEffect} from 'react';
import Rate from "../Rate";

//#2
const rates = require("../../cards.json")

export default function TarifConstructor() {
  const [tarif, setTarif] = useState(); //undefined

  // Аналогично componentDidMount && componentWillUnmount
  useEffect(() => {
    // Сработает только один раз при создании компонента
    console.log(13, "componentDidMount");
    const savedTarif = localStorage.getItem('tarif');
    setTarif(savedTarif);

    // Сработает только один раз при создании компонента
    return () => {
      console.log(18, "componentWillUnmount");
    };
  },[]);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
  });

  const writeToLocalStorage = (id) => {
    localStorage.setItem('tarif', id);
  }

  const handleChoose = (id) => {
    setTarif(id);
    writeToLocalStorage(id);
  }

  return (
    <div className="App">
      {rates.map((rate) => <Rate
        key = {rate.id}
        highlighted = {rate.id === tarif}
        title = {rate.title}
        price = {rate.price}
        speed = {rate.speed}
        id = {rate.id}
        setHighlighted={handleChoose}
      />)}
    </div>
  );
}