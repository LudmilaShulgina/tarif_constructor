import React, {useEffect} from 'react';
import { Card } from 'antd';

export default function Rate(props) {
    //  #1
    const {id, title, price, speed, setHighlighted, highlighted } = props

    // Аналогично    componentDidUpdate:
    useEffect(() => {
        if(highlighted){
            console.log(11, `В ${id} параметр highlighted теперь ${highlighted}`);
        }
    },[highlighted]);

    let highlightedClass = ("highlighted");

    let handleHighlighted = () => {setHighlighted(id);}

    return(
        <div className = {`rateCard ${highlighted && highlightedClass}`} onClick = {handleHighlighted}>
            <Card className = {id}>
                <div className = 'cardTitle'>{title}</div>
                <div className = 'cardContent'>
                    <span className = 'rubles'>руб</span>
                    <span className = 'price'>{price}</span>
                    <span className = 'perMonth'> /мес</span>
                </div>
                <p className = 'speedUntil'>до {speed} мб/сек</p>
                <p className = 'amountOfTrafic'>Объем включенного трафика не ограничен</p>
                <a href={'https://getbootstrap.com/docs/5.1/examples/'}>Hello!</a>
            </Card>
        </div>
    );
}