import React from 'react';
import './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store.";
import {decrementAC, incrementAC, maxValueAC, startValueAC} from "./redux/counterReducer";
import {Counter} from "./components/counter/Counter";
import style from './App.module.css';
import {CounterSetting} from "./components/counter_setting/Counter_Setting";

function App() {

    const startValue = useSelector<AppRootState, number>(state => state.counterReducer.startValue)
    const maxValue = useSelector<AppRootState, number>(state => state.counterReducer.maxValue)


    const count = useSelector<AppRootState, number>(state => state.counterReducer.count)
    const dispatch = useDispatch()

    const onClickINC = () => {
        dispatch(incrementAC(0))
    }

    const onClickRESET = () => {
        dispatch(decrementAC(0))
    }

    const onChangeSetMaxValue = (number: number) => {
        dispatch(maxValueAC(number))
    }

    const onChangeSetStartValue = (number: number) => {
        dispatch(startValueAC(number))
    }

    return (
        <div className={style.wrapper}>
            <CounterSetting
                onChangeSetMaxValue={onChangeSetMaxValue}
                onChangeSetStartValue={onChangeSetStartValue}
            />
            <Counter
                maxValue={maxValue} // ?
                count={count}
                onClickINC={onClickINC}
                onClickRESET={onClickRESET}
            />
        </div>
    );
}

export default App;
