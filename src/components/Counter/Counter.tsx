import React, {useState} from 'react';
import s from './Counter.module.css'
import {SetBlock} from "./SetBlock";
import CounterBlock from "./CounterBlock";

export function Counter() {

    const [maxValue, setMaxValue] = useState<string | number>(5)
    const [minValue, setMinValue] = useState<number | string>(0)

    const [value, setValueCount] = useState<number | string>(0)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [disabledRes, setDisabledRes] = useState<boolean>(true)
    const [disabledSet, setDisabledSet] = useState<boolean>(false)
    const [pressSet, setPressSet] = useState<boolean>(false)

    const addHandler = () => {
        setValueCount(+value + 1)
        if (value === (+maxValue - 1)) setDisabled(true)
        setDisabledRes(false)
    }

    const resetHandler = () => {
        setValueCount(minValue)
        setDisabledRes(true)
        setDisabled(false)
    }

    const setHandler = () => {
        setValueCount(minValue)
        setPressSet(false)
        setDisabled(false)
    }

    const disabledButtons = () => {
        setDisabledRes(true)
        setDisabled(true)
    }

    return (
        <div className={s.counterContainer}>
            <SetBlock disabledSet={disabledSet} setDisabledSet={setDisabledSet} disabledButtons={disabledButtons}
                      setPressSet={setPressSet} setHandler={setHandler} minValue={minValue} maxValue={maxValue}
                      setMaxValue={setMaxValue}
                      setMinValue={setMinValue}/>
            <CounterBlock pressSet={pressSet} disabledRes={disabledRes} value={value} disabled={disabled}
                          resetHandler={resetHandler} addHandler={addHandler}/>
        </div>
    );
}

