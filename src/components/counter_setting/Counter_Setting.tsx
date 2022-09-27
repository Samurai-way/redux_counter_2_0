import React, {ChangeEvent, useState} from 'react';
import style from './Counter_Setting.module.css';

type CounterSettingProps = {
    onChangeSetValue: (value: number) => void
    onChangeSetMaxValue: (value: number) => void
}

export const CounterSetting = (props: CounterSettingProps) => {

    const [maxValue, setMaxValue] = useState(0);
    const [startValue, setStartValue] = useState(0);

    const onClickMaxButton = () => {
        console.log(startValue)
        props.onChangeSetValue(startValue)
    }

    const onClickStartButton = () => {
        console.log(startValue)
        props.onChangeSetValue(startValue)
    }

    const changeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const changeStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }



    return (
        <div className={style.wrapper}>
            <div className={style.values_container}>
                <div
                    className={style.max}>
                    max value:<input
                    type={'number'}
                    className={style.max_value_input}/>
                </div>
                <div
                    className={style.start}>
                    start value:<input
                    type={'number'}
                    className={style.start_value_input}
                    value={startValue}
                    onChange={changeStart}/>
                </div>
            </div>
            <div className={style.buttons_container}>
                <button
                    className={style.set}
                    onClick={onClickStartButton}>set
                </button>
            </div>
        </div>
    );
};
