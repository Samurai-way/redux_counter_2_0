import React from 'react';
import style from './UniversalInput.module.css';

type UniversalInputProps = {

}

export const UniversalInput = (props: UniversalInputProps) => {
    return (
        <input
            className={style.input}
            type={'number'}
        />
    );
};
