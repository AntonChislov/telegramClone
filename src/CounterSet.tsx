import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import './App.css';
import MyButton from "./components/MyButton";

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

export function CounterSet({
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

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setPressSet(true)
        setMaxValue(+e.currentTarget.value)
        disabledButtons()
    }

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        if (minValue <= 0) {
            setError2('Invalid value')
            setDisabledSet(true)
        } else  if (minValue > 0) {
            setError2(null)
            setDisabledSet(false)
        }
        setMinValue(+e.currentTarget.value)
        disabledButtons()
        setPressSet(true)
    }

    const onClickSet = () => {
        setHandler()
    }

    const inputMinClassName = !error2 ? 'inputClass' : 'errorMin'
    const inputMaxClassName = !error1 ? 'inputClass' : 'errorMax'

    return (
        <div className='blockSet'>
            <div className='inputsSet'>
                <div style={{fontSize: '10px'}}>
                    Max: <input className={inputMaxClassName} value={maxValue}
                                onChange={onChangeMax}
                                type='number'/></div>
                <div style={{fontSize: '10px'}}>
                    {error2 ? <span style={{color: 'red'}}>Err:  </span> : 'Min: '} <input className={inputMinClassName}
                                                                                           value={minValue}
                                                                                           onChange={onChangeMin}
                                                                                           type='number'/>
                </div>
            </div>
            <div className='buttonSet'>
                <MyButton disabled={disabledSet} onClickHandler={onClickSet} title={'Set'}/>
            </div>
        </div>
    );
}
