import React, {FC, useState} from 'react'
import './MyInputNumber.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCart} from "../../../redux/slices/motorcyclesSlicer";
import {Cart, MotorcycleElement} from "../../../Types";

export interface MyInputNumberProps {
    id: number
    variation: number
    number: number
}

export const MyInputNumber: FC<MyInputNumberProps> = ({id, variation, number}) => {
    const cart = useSelector((state: any) => state.motorcycles.cart)
    const motorcycles = useSelector((state: any) => state.motorcycles.motorcycles)
    const dispatch = useDispatch()
    const [value, setValue] = useState<number>(number)
    let currentMoto = motorcycles.find((moto: MotorcycleElement) => moto.id === id)
    let currentVariation = currentMoto?.variation[variation]
    let maxNumber = currentVariation?.available

    const addHandler = (): void => {
        if (value < maxNumber)
            changeHandler(value + 1)
    }

    const removeHandler = (): void => {
        if (value > 1)
            changeHandler(value - 1)
    }

    const changeHandler = (result: number): void => {
        let tempCart: Cart = JSON.parse(JSON.stringify(cart))
        for (let i = 0; i < tempCart.length; i++)
            if (tempCart[i][0] === id && tempCart[i][1] === variation)
                tempCart[i][2] = result

        dispatch(setCart(tempCart))
        setValue(result)
    }

    return (
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

