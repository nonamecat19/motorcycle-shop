import React, {Fragment} from "react";
import './ShopingCart.scss'
export const ShoppingCart = (props: any) => {
    return(
        <div className='ShoppingCart'>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box cart max-w-4xl relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Ваша корзина</h3>
                    <div className="windowCart">
                        {props.cart.map((item: any) => (
                            <Fragment key={item}>
                                <div className="h-32 image-full flex justify-around items-center">
                                    <div className="w-60">
                                        <img className="h-32 m-auto" src={props.cache["./"  + item + ".png"]} alt="Shoes" />
                                    </div>
                                    <div className="float-left w-32">
                                        <h2 className="card-title">{props.CardData[item].brand}</h2>
                                        <p>{props.CardData[item].model}</p>
                                    </div>
                                    <div className="align-item-end text-2xl mr-4">
                                        {props.CardData[item].price}$
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <hr/>
                    <h1>Всього:</h1>
                    <b className="text-3xl">
                        {props.getFullPrice()}$
                    </b>
                </div>
            </div>
        </div>
    )
}