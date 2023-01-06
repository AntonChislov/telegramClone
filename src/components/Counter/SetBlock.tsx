import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import s from './SetBlock.module.css'
import MyButton from "../MyButton";

type CounterPropsType = {
    setMaxValue: (value: number | string) => void
    setMinValue: (value: number | string) => void
    maxValue: string | number
    minValue: string | number
    setHandler: () => void
    setPressSet: (value: boolean) => void
    disabledButtons: () => void
    disabledSet: boolean
    setDisabledSet: (value: boolean) => void
}

export function SetBlock({
                             setPressSet,
                             disabledButtons,
                             setDisabledSet,
                             maxValue,
                             setMaxValue,
                             disabledSet,
                             setMinValue,
                             minValue,
                             setHandler
                         }: CounterPropsType) {

    const [error1, setError1] = useState<string | null>(null)
    const [error2, setError2] = useState<string | null>(null)

    const setErrors = (value: string | null) => {
        setError2(value)
        setError1(value)
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= minValue) {
            setErrors('Invalid value')
            setDisabledSet(true)
        } else {
            setErrors(null)
            setDisabledSet(false)
        }
        setPressSet(true)
        setMaxValue(+e.currentTarget.value)
        disabledButtons()
    }

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            setError2('Invalid value')
            setDisabledSet(true)
        } else if (+e.currentTarget.value < 0 || +e.currentTarget.value >= maxValue) {
            setError1('Invalid value')
            setError2('Invalid value')
            setDisabledSet(true)
        } else {
            setError2(null)
            setError1(null)
            setDisabledSet(false)
        }
        setMinValue(+e.currentTarget.value)
        disabledButtons()
        setPressSet(true)
    }

    const onClickSet = () => {
        setHandler()
    }

    const inputMinClassName = !error2 ? s.inputClass : s.errorMin
    const inputMaxClassName = !error1 ? s.inputClass : s.errorMax

    return (
        <div className={s.blockSet}>
            <div className={s.inputsSet}>
                <div style={{fontSize: '10px'}}>
                    {error1 ? <span style={{color: 'red'}}>Err: </span> : 'Max: '} <input className={inputMaxClassName}
                                                                                          value={maxValue}
                                                                                          onChange={onChangeMax}
                                                                                          type='number'/></div>
                <div style={{fontSize: '10px'}}>
                    {error2 ? <span style={{color: 'red'}}>Err:  </span> : 'Min: '} <input className={inputMinClassName}
                                                                                           value={minValue}
                                                                                           onChange={onChangeMin}
                                                                                           type='number'/>
                </div>
            </div>
            <div className={s.buttonSet}>
                <MyButton disabled={disabledSet} onClickHandler={onClickSet} title={'Set'}/>
            </div>
        </div>
    );
}
