import {FC, Fragment} from "react";
import './ShopingCart.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCache} from './../../redux/slices/cacheSlicer'
import {setNotification} from "../../redux/slices/notificationSlicer";
import {setMotorcycles, setCart} from "../../redux/slices/motorcyclesSlicer";
import {setOrder} from "../../redux/slices/orderSlicer";
import {OrderElement} from "../../Types";

interface ShoppingCartProps {
    getFullPrice: Function
    notifyRef: any
}

export const ShoppingCart: FC<ShoppingCartProps> = ({getFullPrice, notifyRef}) => {
    const {motorcycles, filtered, cart} = useSelector((state: any) => state.motorcycles)
    const {cache} = useSelector((state: any) => state.cache)
    const {notification} = useSelector((state: any) => state.notification)
    const {order} = useSelector((state: any) => state.order)

    const dispatch = useDispatch()
    const buyProducts = () => {
        let tempOrder: OrderElement = {
            "number": order.length,
            "products": [],
            "totalPrice": 0,
            "rating": 0,
            "comment": ""
        }
        let tempMotorcycles = motorcycles
        for (let i of cart) {
            tempOrder.products.push(motorcycles[i])
            tempOrder.totalPrice += motorcycles[i].price
            // tempMotorcycles[i].number -= 1
        }
        const notificationValue = {
            header: "Успіх!",
            text: "Побачити квитанцію ви можете в пункті меню 'Мої замовлення'"
        }
        dispatch(setOrder([...order, tempOrder]))
        dispatch(setMotorcycles(tempMotorcycles))
        dispatch(setCart([]))
        dispatch(setNotification(notificationValue))
        notifyRef.current.checked = true
    }

    const elements: Array<JSX.Element> = cart.map((item: number) => (
        <Fragment key={item}>
            <div className="h-32 image-full flex justify-around items-center">
                <div className="w-60">
                    <img className="h-32 m-auto" src={cache["./" + item + ".png"]} alt="Shoes"/>
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

    return (
        <div className='ShoppingCart'>
            <input type="checkbox" id="my-modal-cart" className="modal-toggle"/>
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