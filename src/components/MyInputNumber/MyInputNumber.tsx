import React, {FC, useState} from 'react'
import './MyInputNumber.scss'

export interface MyInputNumberProps {

}


export const MyInputNumber: FC<MyInputNumberProps> = ({}) => {

    const [value, setValue] = useState<number>(1)
    const addHandler = () => {
        setValue(value + 1)
    }

    const removeHandler = () => {
        if (value > 1)
            setValue(value - 1)
    }

    return(
        <div className="MyInputNumber">
            <div
                className="control"
                onClick={removeHandler}
            >
                -
            </div>
            <input
                className="val"
                type="number"
                value={value}
            />
            <div
                className="control"
                onClick={addHandler}
            >
                +
            </div>
        </div>
    )
}

