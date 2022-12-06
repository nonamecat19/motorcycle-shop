import React, {FC, useState} from 'react'
import './MyInputNumber.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCart} from "../../redux/slices/motorcyclesSlicer";
import {Cart} from "../../Types";

export interface MyInputNumberProps {
    id: number
    number: number
}


export const MyInputNumber: FC<MyInputNumberProps> = ({id, number}) => {
    const cart = useSelector((state: any) => state.motorcycles.cart)
    const motorcycles = useSelector((state: any) => state.motorcycles.motorcycles)
    const dispatch = useDispatch()
    const [value, setValue] = useState<number>(1)
    const addHandler = () => {
        if (value < motorcycles[id].number)
            changeHandler(value + 1)
    }

    const removeHandler = () => {
        if (value > 1)
            changeHandler(value - 1)
    }

    const changeHandler = (result: number) => {
        let tempCart: Cart = []
        for (let [Id, Num] of cart) {
            tempCart.push([Id, (Id === id ? result : Num)])
        }
        dispatch(setCart(tempCart))
        setValue(result)
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
                readOnly={true}
                disabled={true}
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

