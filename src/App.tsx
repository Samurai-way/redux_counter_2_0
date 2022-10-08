import React from 'react';
import './App.module.css';
import style from './App.module.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store.";
import {incrementAC, resetAC, setMaxValueAC, setStartValueAC, toggleErrorAC} from "./redux/counterReducer";

function App() {

    const count = useSelector<AppRootState, number>(state => state.counterReducer.count)
    const maxValue = useSelector<AppRootState, number>(state => state.counterReducer.maxValue)
    const error = useSelector<AppRootState, boolean>(state => state.counterReducer.error)

    const dispatch = useDispatch()

    const increment = () => {
        dispatch(incrementAC(count))
    }

    const reset = () => {
        dispatch(resetAC(count))
    }

    const setStartValue = (start: number) => {
        dispatch(setStartValueAC(start))
    }

    const setMaxValue = (max: number) => {
        dispatch(setMaxValueAC(max))
    }

    const toggleError = (error: boolean) => {
        dispatch(toggleErrorAC(error))
    }

    return (
        <div className={style.wrapper}>
            <Counter
                count={count}
                increment={increment}
                reset={reset}
                maxValue={maxValue}
                error={error}
            />
            <Setting
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                toggleError={toggleError}
                
            />
        </div>
    );
}

export default App;
