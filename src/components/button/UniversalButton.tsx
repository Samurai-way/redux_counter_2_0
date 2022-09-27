import React from 'react';
import style from './Button.module.css';

type UniversalButtonProps = {
    name: string
    callBack: () => void
}

export const UniversalButton = (props: UniversalButtonProps) => {

    const onClick = () => {
        props.callBack()
    }

    return (
        <button className={style.button}
                onClick={onClick}>{props.name}</button>
    );
};
