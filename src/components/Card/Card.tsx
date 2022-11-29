import React, {FC} from 'react';
import './Card.scss';
import {Cart, Motorcycles} from "../../Types";

export interface CardProps {
    img: string
    color: string
    brand: string
    model: string
    price: number
    id: number
    cart: Cart
    setCart: Function
    motorcycles: Motorcycles
    setMotorcycles: Function
    number: number
}

export const Card: FC<CardProps> = (
    {
        img,
        color,
        brand,
        model,
        price,
        id,
        cart,
        setCart,
        motorcycles,
        setMotorcycles,
        number
    }) => {
    const addToCart = (e: any) => {
        setCart([...cart, id])
        e.target.disabled = true
        let changedData = motorcycles
        // changedData[id].number = 1
        setMotorcycles(changedData)
        localStorage.setItem('motorcycles', JSON.stringify(changedData))
    }

    return (
        <div className="wrap Card">
            <div className="card w-64 bg-base-100 shadow-xl relative mt-1">
                <div
                    className="img"
                    style={{backgroundImage: `url("${img}")`}}
                >
                </div>
                <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    <h4>{model}</h4>
                    <div className="card-actions justify-end">
                        <button
                            onClick={addToCart}
                            disabled={number === 0}
                        >
                            В кошик - {price}$
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}