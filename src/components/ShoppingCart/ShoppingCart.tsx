import {FC, Fragment, useState} from "react";
import './ShopingCart.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCart, getMotorcyclesAsync} from "../../redux/slices/motorcyclesSlicer";
import {CartElement, MotorcycleElement} from "../../Types";
import {MyInputNumber} from "./MyInputNumber/MyInputNumber";
import {PurchaseActions} from "../../actions/purchase";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {UserActions} from "../../actions/user";
import {useNavigate} from "react-router-dom";

interface ShoppingCartProps {

}

const MyMarker = ({text, tooltip}: any) => (
    <div className="circle">
    <span className="circleText" title={tooltip}>
      {text}
    </span>
    </div>
);

export const ShoppingCart: FC<ShoppingCartProps> = ({}) => {
    const {motorcycles, cart, fullPrice} = useSelector((state: any) => state.motorcycles)

    const dispatch = useDispatch()
    const buyProducts = (): void => {
        if ((new UserActions().getCookie()?.length ?? '') < 5) {
            navigate('/auth')
            return
        }
        if (cart.length === 0){
            alert('Кошик порожній')
            return
        }
        let newCart = JSON.parse(JSON.stringify(cart))
        for (let i = 0; i < newCart.length; i++) {
            let currentMoto = motorcycles.find((moto: MotorcycleElement) => moto.id === newCart[i][0])
            let currentVariation = currentMoto?.variation[newCart[i][1]]
            newCart[i][1] = currentVariation?.id
        }

        let purchase = new PurchaseActions()
        purchase.buy(JSON.stringify(newCart), fullPrice, selected)
            .then(() => {
                dispatch(setCart([]))
                // @ts-ignore
                dispatch(getMotorcyclesAsync())
                alert("Успіх! З вами звяжеться менеджер для уточнення деталей.\nОрієнтований час доставки: 1-2 дні.")
            })
            .catch((error) => alert('Недостатня к-сть товару на складі' + error))
    }

    const deleteProduct = (id: number, variation: number): void => {
        let tempCart = JSON.parse(JSON.stringify(cart))
        tempCart = tempCart.filter(([idMoto, varMoto, numberItem]: any) => {
            return idMoto !== id || variation !== varMoto
        })
        dispatch(setCart(tempCart))
    }

    let navigate = useNavigate()
    const [selected, setSelected] = useState<number>(1);

    return (
        <div className='ShoppingCart'>
            <input type="checkbox" id="my-modal-cart" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box cart max-w-4xl relative">
                    <label htmlFor="my-modal-cart" className="btn btn-sm absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Ваш кошик</h3>
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
                    <div className='flex'>
                        <div>
                            <h1>Всього:</h1>
                            <b className="text-3xl">{fullPrice} грн</b>
                        </div>

                        <select
                            className='absolute left-40 select mt-4 ml-16 border-bg border-2 w-48'
                            defaultValue={selected}
                            onChange={(e) => setSelected(parseInt(e.target.value))}
                        >
                            <option value={1}>Житомирська політехніка</option>
                            <option value={2}>Івана Франка</option>
                            <option value={3}>Поліський національний</option>
                        </select>

                        <label
                            htmlFor="my-modal-cart"
                            className="btn btn-m absolute right-5 bottom-5 text-1xl"
                            onClick={buyProducts}
                        >
                            Замовити товар
                        </label>
                    </div>


                </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            className="gmap_iframe"
                            frameBorder="0"
                            scrolling="no"
                            src="https://maps.google.com/maps?width=300&amp;height=400&amp;hl=en&amp;q=Zhytomyr Державний університет&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                        <a href="https://www.gachacute.com/">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}




