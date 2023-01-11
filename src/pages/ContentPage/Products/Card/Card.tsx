import {FC} from 'react'
import './Card.scss'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {setCart} from '../../../../redux/slices/motorcyclesSlicer'
import {Slider} from "../../../../components/Slider/Slider";
import {MotorcycleElement} from "../../../../Types";

export interface CardProps extends MotorcycleElement {
    cartIcon: string
}

export const Card: FC<CardProps> = (
    {
        id,
        model,
        brand,
        price,
        fuelCapacity,
        fuelConsumption,
        gears,
        mass,
        variation,
        cartIcon
    }) => {
    let {motorcycles, cart} = useSelector((state: any) => state.motorcycles)
    const dispatch = useDispatch()

    const addToCart = (e: any): void => {
        dispatch(setCart([...cart, [id, 1]]))
        e.target.disabled = true
    }

    const isDisabled = (): boolean => {
        if (motorcycles[id].number === 0)
            return true
        for (let [productId, number] of cart)
            if (productId === id)
                return true
        return false
    }

    return (
        <div className="wrap Card">
            <div className="card">
                <div
                    className="img"
                >
                    <Slider
                        variation={variation}
                        color={'#ffffff'}
                        sliderStyle={'-mt-6'}
                    />
                </div>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">{brand}</h2>
                        <div className="toCartWrapper relative">
                            {/*<button*/}
                            {/*    className="toCart"*/}
                            {/*    // disabled={isDisabled()}*/}
                            {/*    onClick={addToCart}*/}
                            {/*    style={{backgroundImage: `url("${cartIcon}")`}}*/}
                            {/*>*/}

                            {/*</button>*/}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="truncate">{model}</h4>
                        <h4>{price}грн</h4>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`products/motorcycles/${id}`}>
                            <button
                                className="toProduct"
                            >
                                Перейти до товару
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}