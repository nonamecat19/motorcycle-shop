import React, {FC, Fragment} from "react";
import './ShopingCart.scss'
import {Cache, Motorcycles, Cart, OrderElement} from '../../Types'
import {useDispatch, useSelector} from "react-redux";
import {setNotify} from "../../redux/slices/notify";
import {setOrder} from "../../redux/slices/orderSlicer";

interface ShoppingCartProps {
    "cart": Cart
    "setCart": Function
    "motorcycles": Motorcycles
    "setMotorcycles": Function
    "cache": Cache
    "getFullPrice": Function
    "notifyRef": any
    "dispatch": Function
}



export const ShoppingCart: FC<ShoppingCartProps> = ({cart, setCart, motorcycles, setMotorcycles, cache, getFullPrice, notifyRef, dispatch}) => {
    const orders = useSelector((state: any) => state.order.order)

    const elements: Array<JSX.Element> = cart.map((item: number) => (
        <Fragment key={item}>
            <div className="h-32 image-full flex justify-around items-center">
                <div className="w-60">
                    <img className="h-32 m-auto" src={cache["./"  + item + ".png"]} alt="Shoes" />
                </div>
                <div className="float-left w-32">
                    <h2 className="card-title">{motorcycles[item].brand}</h2>
                    <p>{motorcycles[item].model}</p>
                </div>
                <div className="align-item-end text-2xl mr-4">
                    {motorcycles[item].price}$
                </div>
            </div>
        </Fragment>
    ));

    const buyProducts = () => {
        let tempOrder: OrderElement = {
            "number": orders.length,
            "products": [],
            "totalPrice": 0,
            "rating": 0,
            "comment": ""
        }
        for (let i of cart){
            tempOrder.products.push(motorcycles[i])
            tempOrder.totalPrice += motorcycles[i].price
        }


        dispatch(setOrder([...orders, tempOrder]))


        let tempMotorcycles = motorcycles
        for (let i of cart)
            tempMotorcycles[i].available = false
        setMotorcycles(tempMotorcycles)
        setCart([])

        dispatch(setNotify({
            header: "Успіх!",
            text: "Побачити квитанцію ви можете в пункті меню 'Мої замовлення'"
        }))
        notifyRef.current.checked = true
    }



    return(
        <div className='ShoppingCart'>
            <input type="checkbox" id="my-modal-cart" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box cart max-w-4xl relative">
                    <label htmlFor="my-modal-cart" className="btn btn-sm absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Ваша корзина</h3>
                    <div className="windowCart">{elements}</div>
                    <hr/>
                    <h1>Всього:</h1>
                    <b className="text-3xl">{getFullPrice()}$</b>
                    <label
                        htmlFor="my-modal-cart"
                        className="btn btn-m absolute right-5 bottom-5 text-1xl"
                        onClick={buyProducts}
                    >Замовити товар</label>
                </div>
            </div>
        </div>
    )
}