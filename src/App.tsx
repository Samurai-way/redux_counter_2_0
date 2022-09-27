import React from 'react';
import './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store.";
import {decrementAC, incrementAC, maxValueAC, startValueAC} from "./redux/counterReducer";
import {Counter} from "./components/counter/Counter";
import style from './App.module.css';
import {type} from "os";
import {CounterSetting} from "./components/counter_setting/Counter_Setting";

function App() {

    const startValue = useSelector<AppRootState, number>(state => state.counterReducer.startValue)
    const maxValue = useSelector<AppRootState, number>(state => state.counterReducer.maxValue)


    const count = useSelector<AppRootState, number>(state => state.counterReducer.count)
    const dispatch = useDispatch()


    const onClickINC = () => {
        dispatch(incrementAC(10))
    }

    const onClickRESET = () => {
        dispatch(decrementAC(0))
    }

    const onChangeSetMaxValue = (value:number) => {
        dispatch(maxValueAC(value))
    }

    const onChangeSetStartValue = (value: number) => {
        dispatch(startValueAC(value))
    }

    return (
        <div className={style.wrapper}>
            <CounterSetting
                onChangeSetMaxValue={onChangeSetMaxValue}
                onChangeSetValue={onChangeSetStartValue}
            />
            <Counter count={count}
                     onClickINC={onClickINC}
                     onClickRESET={onClickRESET}
            />
        </div>
    );
}

export default App;
