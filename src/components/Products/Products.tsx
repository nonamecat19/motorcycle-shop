import {Card} from "../Card/Card";
import React from "react";
import './Products.scss'
import {MotorcycleElement} from '../../Types'
import {useSelector} from "react-redux";

export const Products = (props: any) => {
    const {cache} = useSelector((state: any) => state.cache)

    return(
        <div className='Products'>
            {props.filtered.map((i: MotorcycleElement) =>  (
                <Card
                    key={i.id}
                    img={cache["./" + i.img]}
                    color={i.color}
                    brand={i.brand}
                    model={i.model}
                    price={i.price}
                    id={i.id}
                    cart={props.cart}
                    setCart={props.setCart}
                    motorcycles={props.motorcycles}
                    setMotorcycles={props.setMotorcycles}
                    number={i.number}
                />
            ))}
        </div>
    )
}