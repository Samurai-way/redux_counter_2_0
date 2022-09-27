import React from 'react';
import style from './Counter_Setting.module.css';
import {UniversalButton} from "../button/UniversalButton";
import {UniversalInput} from "../input/Universal_Input";

type CounterSettingProps = {}

export const CounterSetting = (props: CounterSettingProps) => {
    return (
        <div className={style.wrapper}>
            <div className={style.values_container}>
                <div
                    className={style.max}>
                    max value:<UniversalInput/>
                </div>
                <div
                    className={style.start}>
                    start value:<UniversalInput/>
                </div>
            </div>
            <div className={style.buttons_container}>
                <UniversalButton name={'set'}
                                 callBack={() => {
                                     alert('set')
                                 }}
                />
            </div>
        </div>
    );
};
