import {useContext, useEffect} from 'react';
import { Card } from 'antd';
import { ThemeContext } from "../../context";
import { WordsContext } from "../../wordsContext";

export interface RateProps {
    id: string,
    title: string,
    price: number,
    speed: number,
    setHighlighted: (id: string)=>void,
    highlighted?: boolean
}


export default function Rate(props:RateProps) {
    //  #1
    const {id, title, price, speed, setHighlighted, highlighted } = props;

    const { theme } = useContext(ThemeContext);
    const { getWords } = useContext(WordsContext);

    // Аналогично    componentDidUpdate:
    useEffect(() => {
        if(highlighted){
           // console.log(11, `В ${id} параметр highlighted теперь ${highlighted}`);
        }
    },[highlighted, id]);

    let handleHighlighted = () => {
        getWords();
        setHighlighted(id);
    }

    return(
        <div className = {`rateCard ${highlighted ? "highlighted" : ""} rateCard__${theme}`} onClick = {handleHighlighted}>
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