import React from 'react';
import style from './Counter.module.css';
import {UniversalButton} from "../button/UniversalButton";

type CounterPropsType = {
    count: number
    onClickINC: () => void
    onClickRESET: () => void
}

export const Counter = (props: CounterPropsType) => {

    const onClickINC = ()=>{
        props.onClickINC()
    }

    const onClickRESET = ()=>{
        props.onClickRESET()
    }

    return (
        <div className={style.wrapper}>
            <div className={style.value_container}>
                <div className={style.value}>
                    {props.count}
                </div>
            </div>
            <div className={style.buttons_container}>
                <UniversalButton
                    name={'inc'}
                    callBack={onClickINC}
                />
                <UniversalButton
                    name={'reset'}
                    callBack={onClickRESET}
                />
            </div>
        </div>
    );
};
