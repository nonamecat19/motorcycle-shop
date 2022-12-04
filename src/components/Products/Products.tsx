import {Card} from "../Card/Card";
import React, {FC, Ref} from "react";
import './Products.scss'
import {Cart, MotorcycleElement, Motorcycles, Notify, Orders} from '../../Types'
import {useSelector} from "react-redux";

export interface ProductsProps {

}

export const Products: FC<ProductsProps> = ({}) => {

    const {cache} = useSelector((state: any) => state.cache)
     const {motorcycles, filtered} = useSelector((state: any) => state.motorcycles)

    return (
        <div className='Products'>
            {filtered.map((i: MotorcycleElement) => (
                <Card
                    key={i.id}
                    img={cache["./" + i.img]}
                    color={i.color}
                    brand={i.brand}
                    model={i.model}
                    price={i.price}
                    id={i.id}
                    number={i.number}
                />
            ))}
        </div>
    )
}