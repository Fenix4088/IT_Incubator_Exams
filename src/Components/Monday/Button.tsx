import React from 'react';
import s from './Monday.module.scss'


/*type ButtonType = {
    title: string,
    callback: () => void,
    disabled: boolean
}*/

export const Button: React.FC<any> = (props) => {
    const {name, callback, disabled} = props;


    return (
        <button onClick={callback}
                disabled={disabled}
                className={disabled ? s.disabledBtn : s[`${name}Btn`]}
        >
            {name}
        </button>
    )
}

