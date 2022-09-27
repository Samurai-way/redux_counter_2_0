import React from 'react';
import './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store.";
import {decrementAC, incrementAC} from "./redux/counterReducer";
import {Counter} from "./components/counter/Counter";
import style from './App.module.css';
import {type} from "os";
import {CounterSetting} from "./components/counter_setting/Counter_Setting";

function App() {

    const minValue = useSelector<AppRootState, number>(state => state.counterReducer.minValue)
    const maxValue = useSelector<AppRootState, number>(state => state.counterReducer.maxValue)

    const count = useSelector<AppRootState, number>(state => state.counterReducer.count)

    const dispatch = useDispatch()


    const onClickINC = () => {
        dispatch(incrementAC(0))
    }

    const onClickRESET = () => {
        dispatch(decrementAC(0))
    }


    return (
        <div className={style.wrapper}>
            <CounterSetting/>
            <Counter count={count}
                     onClickINC={onClickINC}
                     onClickRESET={onClickRESET}
            />
        </div>
    );
}

export default App;
