import {useState, useEffect} from 'react';
import Rate, {RateProps} from "../Rate";
import * as React from "react";

//#2
const rates = require("../../cards.json")

export default function TarifConstructor() {
  const [tarif, setTarif] = useState<string>(); //undefined

  // Аналогично componentDidMount && componentWillUnmount
  useEffect(() => {
    // Сработает только один раз при создании компонента
    const savedTarif = localStorage.getItem('tarif');
    if(savedTarif) {
      setTarif(savedTarif);
    }


    // Сработает только один раз при создании компонента
    return () => {

    };
  },[]);

  //Аналогично componentDidMount и componentDidUpdate:
  // useEffect(() => {
  //   console.log(25, "Я происхожу всегда, при любом изменении компонента");
  // });

  useEffect(() => {
    if(tarif){
      //console.log(32, "tarif изменился");
      writeToLocalStorage(tarif);
    }
  },[tarif]);

  const writeToLocalStorage = (id:string) => {
    //console.log('writeToLocalStorage', id)
    localStorage.setItem('tarif', id);
  }

  const handleChoose = (id:string) => {
    setTarif(id);
    // writeToLocalStorage(id);
  }

  return (
    <div className="App">
      {rates.map((rate:RateProps) => <Rate
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