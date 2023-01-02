import Button from '@mui/material/Button/Button';
import React from 'react';

type ButtonPropsType = {
    disabled: boolean
    onClickHandler: () => void
    title: string
    style?: {margin?: string, marginTop?: string}
}

function MyButton({style, disabled, onClickHandler, title}: ButtonPropsType) {
    return (
        <div>
        <Button style={style} variant="contained" disabled={disabled}
                onClick={onClickHandler}>{title}</Button>
        </div>
    );
}

export default MyButton;
