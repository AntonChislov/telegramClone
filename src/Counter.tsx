import React from 'react';
import './App.css';
import MyButton from "./components/MyButton";

type CounterPropsType = {
    disabled: boolean
    value: number | string
    addHandler: () => void
    resetHandler: () => void
    disabledRes: boolean
    pressSet: boolean
}

function Counter({pressSet, disabled, value, addHandler, resetHandler, disabledRes}: CounterPropsType) {
    return (
        <div className='blockCounter'>
            <div className={!disabled ? 'valueCounter' : 'valueCounter maxValue'}>{pressSet ? 'Press SET' : value}</div>
            <div className='buttonsCounter'>
                <MyButton disabled={disabled} onClickHandler={addHandler} title={'Inc'}/>
                <MyButton style={{margin: '0 0 0 5px'}} disabled={disabledRes} onClickHandler={resetHandler}
                          title={'Res'}/>
            </div>
        </div>
    );
}

export default Counter;
