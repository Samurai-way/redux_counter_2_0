import React from 'react';
import e from './Counters.module.css'

export const Error = () => {
    return (
        <div className={e.error_wrapper}>
            <h1>Incorrect value</h1>
        </div>
    );
};
