import React from 'react';
import './Card.scss';

export const Card = (props: any) => {
    const addToCart = (e: any) => {
        props.setCart([...props.cart, props.id])
        e.target.disabled = true
        let changedData = props.motorcycles
        changedData[props.id].available = false
        props.setMotorcycles(changedData)
        localStorage.setItem('motorcycles', JSON.stringify(changedData))
    }

    return(
        <div className="wrap">
            <div
                className="h-8 img"
                style={{backgroundImage: `url("${props.img}")`}}
            >
            </div>
            <div className="card w-64 bg-base-100 shadow-xl relative mt-36">
                <div
                    className="h-12"
                    style={{backgroundColor: props.color}}
                ></div>
                <div className="card-body">
                    <h2 className="card-title">{props.brand}</h2>
                    <h4>{props.model}</h4>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={addToCart}
                            disabled={props.number === 0}
                        >
                            Купити - {props.price}$</button>
                    </div>
                </div>
            </div>
        </div>
    )
}