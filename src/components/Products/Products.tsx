import {Card} from "../Card/Card";
import React from "react";
import './Products.scss'
import {MotorcycleElement} from '../../Types'

export const Products = (props: any) => {
    return(
        <div className='Products'>
            {props.filtered.map((i: MotorcycleElement) =>  (
                <Card
                    key={i.id}
                    img={props.cache["./" + i.img]}
                    color={i.color}
                    brand={i.brand}
                    model={i.model}
                    price={i.price}
                    id={i.id}
                    cart={props.cart}
                    setCart={props.setCart}
                    motorcycles={props.motorcycles}
                    setMotorcycles={props.setMotorcycles}
                    available={i.available}
                />
            ))}
        </div>
    )
}