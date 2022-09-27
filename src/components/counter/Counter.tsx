import React from 'react';
import style from './Counter.module.css';

type CounterPropsType = {
    count: number
    onClickINC: () => void
    onClickRESET: () => void
}

export const Counter = (props: CounterPropsType) => {

    const onClickINC = () => {
        props.onClickINC()
    }

    const onClickRESET = () => {
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
                {/*<button onClick={onClickINC} disabled={props.count === 5}>INCREM</button>*/}
                <button
                    onClick={onClickINC}
                    className={style.inc_button}>inc
                </button>
                <button
                    onClick={onClickRESET}
                    className={style.reset_button}>reset
                </button>
            </div>
        </div>
    );
};
