import {Card} from './Card/Card'
import {FC} from "react";
import './Products.scss'
import {MotorcycleElement} from '../../../Types'
import {useSelector} from "react-redux";

export interface ProductsProps {

}

export const Products: FC<ProductsProps> = ({}) => {
    const {cache} = useSelector((state: any) => state.cache)
    const {filtered} = useSelector((state: any) => state.motorcycles)
    return (
        <div className='Products'>
            {
                filtered.map((moto: MotorcycleElement) => (
                    <Card
                        key={moto.id}
                        {...moto}
                        cartIcon={cache['./cart.png']}
                    />
                ))
            }
        </div>
    )
}