import React from 'react';
import s from './CounterBlock.module.css'
import MyButton from "../MyButton";

type CounterPropsType = {
    disabled: boolean
    value: number | string
    addHandler: () => void
    resetHandler: () => void
    disabledRes: boolean
    pressSet: boolean
}

function CounterBlock({pressSet, disabled, value, addHandler, resetHandler, disabledRes}: CounterPropsType) {
    const valueClassName = !disabled ? s.valueCounter : s.valueCounter + ' ' + s.maxValue
    return (
        <div className={s.blockCounter}>
            <div className={valueClassName}>{pressSet ? 'Press SET' : value}</div>
            <div className={s.buttonsCounter}>
                <MyButton disabled={disabled} onClickHandler={addHandler} title={'Inc'}/>
                <MyButton style={{margin: '0 0 0 5px'}} disabled={disabledRes} onClickHandler={resetHandler}
                          title={'Res'}/>
            </div>
        </div>
    );
}

export default CounterBlock;
