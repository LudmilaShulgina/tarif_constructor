import {useState, useContext} from 'react';
import {ThemeContext} from "../../context";
import * as React from "react";

const array = Array.from(Array(25).keys())

export default function Constructor() {
  const [selected, setSelected] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const { toggleTheme } = useContext(ThemeContext);

  const handleClick = (item:number) =>{
    if (toggleTheme) {
      toggleTheme();
    }
    setCounter(counter+1);

    // const newArr = new Set(selected); //  [0,5]
    // newArr.add(item); //[0,5,7]
    //setSelected(Array.from(newArr));

    if(!selected.includes(item) ){
      setSelected([...selected,item]);
    }
  }

  return (<div className={'wrapper'}>
    <div className="container">
      {array.map((item) => {
        return <div
          onClick={()=>handleClick(item)}
          className={`card ${selected.includes(item) && "selected"} `}
        >
            {item}
        </div>
      })
      }
    </div>
    <h2>{`Всего кликов: ${counter}`}</h2>
    <h2>{`Выбранных карточек: ${selected.length} / ${array.length}`}</h2>
    </div>
  );
}