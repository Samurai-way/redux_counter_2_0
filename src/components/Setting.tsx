import React, {ChangeEvent, useState} from 'react';
import s from './Counters.module.css'

const style = {
    backgroundColor: 'red'
}

type SettingPropsType = {
    setStartValue:(startValue: number)=>void
    setMaxValue:(maxValue: number)=>void
    toggleError:(error: boolean)=>void
}

export const Setting = (props: SettingPropsType) => {

    const [max, setMax]=useState(0)
    const [start, setStart]=useState(0)

    const redStyle = max < 0 || start < 0 ? style : undefined
    const disabled = max < 0 || start < 0 || max === start || start > max

    const setHandler = () => {
        props.setStartValue(start)
        props.setMaxValue(max)
    }

    if(max < 0 || start < 0 || max === start || start > max){
        props.toggleError(true)
    } else {
        props.toggleError(false)
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
    }
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }
    return (
        <div className={s.Setting_wrapper}>
            <div className={s.inputs_wrapper}>
                <div
                    className={s.max}>Max value:
                    <input className={s.i_m}
                           type={'number'}
                           value={max}
                           style={redStyle}
                           onChange={maxValueHandler}
                    /></div>
                <div
                    className={s.start}>Start value:
                    <input
                    value={start}
                    style={redStyle}
                    onChange={startValueHandler}
                    className={s.i_s} type={'number'}/></div>
            </div>
            <div className={s.button_wrapper}>
                <button
                    disabled={disabled}
                    className={s.set}
                    onClick={setHandler}
                >SET</button>
            </div>
        </div>
    );
};
