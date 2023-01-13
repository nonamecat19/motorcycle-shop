import {FC, Fragment, useContext, useState} from "react";
import './ShopingCart.scss'
import {useDispatch, useSelector} from "react-redux";
import {setNotification} from "../../redux/slices/notificationSlicer";
import {setMotorcycles, setCart, getMotorcyclesAsync} from "../../redux/slices/motorcyclesSlicer";
import {setOrder} from "../../redux/slices/orderSlicer";
import {Cart, CartElement, ContextStoreType, MotorcycleElement, OrderElement} from "../../Types";
import {MyContext} from "../ContextStore/ContextStore";
import {MyInputNumber} from "./MyInputNumber/MyInputNumber";
import {PurchaseActions} from "../../actions/purchase";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {UserActions} from "../../actions/user";
import {useNavigate} from "react-router-dom";

interface ShoppingCartProps {

}

export const ShoppingCart: FC<ShoppingCartProps> = ({}) => {
    const {motorcycles, cart, fullPrice} = useSelector((state: any) => state.motorcycles)
    const {cache} = useSelector((state: any) => state.cache)
    const {notification} = useSelector((state: any) => state.notification)
    const {order} = useSelector((state: any) => state.order)

    const dispatch = useDispatch()
    const buyProducts = (): void => {
        if ((new UserActions().getCookie()?.length ?? '') < 5) {
            navigate('/auth')
            return
        }

        let newCart = JSON.parse(JSON.stringify(cart))
        for (let i = 0; i < newCart.length; i++) {
            let currentMoto = motorcycles.find((moto: MotorcycleElement) => moto.id === newCart[i][0])
            let currentVariation = currentMoto?.variation[newCart[i][1]]
            newCart[i][1] = currentVariation?.id
        }
        let fullPrice = useSelector((state: any) => state.motorcycles.fullPrice)
        let purchase = new PurchaseActions()
        purchase.buy(JSON.stringify(newCart), fullPrice)
            .then(() => {
                dispatch(setCart([]))
                // @ts-ignore
                dispatch(getMotorcyclesAsync())
                alert("Успіх!")
            })
            .catch(() => alert('Недостатня к-сть товару на складі'))
    }

    const deleteProduct = (id: number, variation: number): void => {
        let tempCart = JSON.parse(JSON.stringify(cart))
        tempCart = tempCart.filter(([idMoto, varMoto, numberItem]: any) => {
            return idMoto !== id || variation !== varMoto
        })
        dispatch(setCart(tempCart))
    }

    let navigate = useNavigate()

    return (
        <div className='ShoppingCart'>
            <input type="checkbox" id="my-modal-cart" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box cart max-w-4xl relative">
                    <label htmlFor="my-modal-cart" className="btn btn-sm absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Ваша корзина</h3>
                    <div className="windowCart">
                        {
                            cart.map(([idItem, variation, numberItem]: CartElement) => {
                                let key = idItem.toString() + variation.toString() + numberItem.toString()
                                let currentMotorcycle = motorcycles.find((item: any) => item.id === idItem)
                                if (currentMotorcycle === undefined)
                                    return <Fragment key={key}></Fragment>


                                let photo = `http://localhost:8888/data/${currentMotorcycle?.variation[variation]?.photo}`

                                return (
                                    <Fragment key={key}>
                                        <div className="h-32 image-full flex justify-around items-center">
                                            <div className="w-60">
                                                <img className="h-32 m-auto" src={photo} alt="Shoes"/>
                                            </div>
                                            <div className="float-left w-32">
                                                <h2 className="card-title">{currentMotorcycle.brand}</h2>
                                                <p>{currentMotorcycle.model}</p>
                                            </div>
                                            <div className="align-item-end text-2xl mr-4">
                                                {currentMotorcycle.price} грн
                                            </div>
                                            <MyInputNumber
                                                id={idItem}
                                                variation={variation}
                                                number={numberItem}
                                            />
                                            <div
                                                className='ml-2 mb-12'
                                                onClick={() => {deleteProduct(idItem, variation)}}
                                            >
                                                <AiOutlineCloseCircle/>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <hr/>
                    <h1>Всього:</h1>
                    <b className="text-3xl">{fullPrice}$</b>
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
