import {Card} from "@c/Card/Card";
import {FC} from "react";
import './Products.scss'
import {MotorcycleElement} from '@types'
import {useSelector} from "react-redux";

export interface ProductsProps {

}

export const Products: FC<ProductsProps> = ({}) => {

    const {cache} = useSelector((state: any) => state.cache)
    const {motorcycles, filtered} = useSelector((state: any) => state.motorcycles)
    return (
        <div className='Products'>
            {filtered.map(({id, model, brand, price, }: MotorcycleElement) => (
                <Card
                    key={id}
                    // img={cache['./' + i.img]}
                    // color={i.color}
                    brand={brand}
                    model={model}
                    price={price}
                    id={id}
                    // number={i.number}

                    //TODO optimize this
                    cartIcon={cache['./cart.png']}
                />
            ))}
        </div>
    )
}