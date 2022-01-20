import React, {useState} from 'react';

const array = Array.from(Array(25).keys())

export default function Constructor() {
  const [selected, setSelected] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleClick = (item) =>{
    setCounter(counter+1);

    const newArr = new Set(selected);
    newArr.add(item);
    setSelected(Array.from(newArr));
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