import React from 'react';
import m from './Counters.module.css'
import {Error} from "./Error";
import {Simulate} from "react-dom/test-utils";


type CounterPropsType = {
    count: number
    increment: () => void
    reset: () => void
    maxValue: number
    error:boolean
}

const big = {
    fontSize: '55px',
    color: 'crimson'
}

export const Counter = (props: CounterPropsType) => {

    const disabled =
        props.maxValue <=
        props.count ||
        props.count < 0 ||
        props.maxValue < 0 ||
        props.error

    const style = props.count === props.maxValue ? big : undefined


    const incHandler = () => {
        props.increment()
    }
    const resHandler = () => {
        props.reset()
    }

    return (
        <div className={m.Counter_wrapper}>
            {
                  props.error ? <Error/> : <div className={m.value_wrapper}>
                    <h1 className={m.value} style={style}>{props.count}</h1>
                </div>
            }
            <div className={m.buttons_wrapper}>
                <button
                    className={m.inc}
                    onClick={incHandler}
                    disabled={disabled}
                >INC
                </button>
                <button className={m.reset}
                        disabled={props.count < props.maxValue}
                        onClick={resHandler}>RESET</button>
            </div>
        </div>
    );
};

