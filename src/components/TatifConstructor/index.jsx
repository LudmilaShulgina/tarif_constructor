import React, {useState} from 'react';
import Rate from "../Rate";

//#2
const rates = require("../../cards.json")

export default function TarifConstructor() {
  const [tarif, setTarif] = useState(); //undefined

  const handleChoose = (id) => {
    setTarif(id)
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