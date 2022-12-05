import React, {FC, Ref, useContext, useRef} from 'react'
import './Notification.scss'
import {useSelector} from "react-redux";
import {ContextStoreType} from "../../Types";
import {MyContext} from '../ContextStore/ContextStore';

interface NotificationProps {

}

export const Notification: FC<NotificationProps> = ({}) => {
    const context = useContext(MyContext) as ContextStoreType
    const {notifyRef} = context
    const {header, text} = useSelector((state: any) => state.notification)
    const refMy = useRef()
    return (
        <>
            <input
                type="checkbox"
                id="my-modal-notification"
                className="modal-toggle"
                ref={notifyRef}
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-notification" className="btn btn-sm absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{header}</h3>
                    <p className="py-4 text-sm">{text}</p>
                </div>
            </div>
        </>
    )
}

