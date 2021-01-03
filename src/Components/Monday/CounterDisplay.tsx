import React from 'react';
import s from './Monday.module.scss'


type CounterDisplayType = {
    counter: number
}

export const CounterDisplay:React.FC<CounterDisplayType> = (props) => {
    const {counter} = props;

    const maxCounterValueStyle = {
        color: counter === 5 ? "red": "black",
    }

    return (
        <div className={s.counter}
             style={maxCounterValueStyle}
        >
            {counter}
        </div>
    );
}