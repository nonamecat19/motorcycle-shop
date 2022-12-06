import {FC, useState} from 'react'
import './OrderList.scss'
import {MotorcycleElement, Motorcycles, MotorcyclesWithNumber, MotoWithNumber, OrderElement} from "../../Types";
import {useSelector} from "react-redux";

interface OrderListProps {

}

export const OrderList: FC<OrderListProps> = ({}) => {

    let {order} = useSelector((state: any) => state.order)
    let localComments = localStorage.getItem('comments')
    let defaultComments: string[] = localComments ? JSON.parse(localComments) : new Array(order.length).fill("");
    const [comments, setComments] = useState(defaultComments)

    const commentsHandler = (event: any) => {
        let temp = comments
        temp[parseInt(event.target.name)] = event.target.value
        setComments(temp)
    }

    let orderProducts = (motorcycles: MotorcyclesWithNumber) => {
        return (
            motorcycles.map(([motorcycle, number]: MotoWithNumber) => (
                <div
                    className="orderProducts flex justify-between"
                    key={motorcycle.id}
                >
                    <div>{motorcycle.brand} {motorcycle.model}</div>
                    <div className="text-1xl">{motorcycle.price}</div>
                </div>
            ))
        )
    }

    const saveComments = () => {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    let orderList = order.map(({number, products, totalPrice, rating, comment}: OrderElement) => {
        return (
            <div key={number} className="flex">
                <div className="collapse collapse-arrow w-full rounded m-1 orderCollapse">
                    <input type="checkbox" className="peer"/>
                    <div className="collapse-title bg-primary text-primary-content flex justify-between">
                        <div>Замовлення №{number}</div>
                        <div>{totalPrice}$</div>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content">
                        <div className="border-4 rounded-xl p-2 mb-2">
                            {orderProducts(products)}
                        </div>
                        <textarea
                            className="textarea textarea-bordered w-full rounded-xl text-black"
                            placeholder="Ваш коментар"
                            name={number.toString()}
                            defaultValue={comments[number]}
                            onChange={commentsHandler}
                        >
                        </textarea>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="OrderList">
            <input
                type="checkbox"
                id="my-modal-order"
                className="modal-toggle"
                onClick={saveComments}
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Мої замовлення</h3>
                    <div className="windowOrders">
                        {orderList}
                    </div>
                </div>
            </div>
        </div>
    )
}

