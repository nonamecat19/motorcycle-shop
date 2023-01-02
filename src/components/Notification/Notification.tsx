import {FC, useContext} from 'react'
import './Notification.scss'
import {useSelector} from "react-redux";
import {ContextStoreType} from "@types";
import {MyContext} from '@c/ContextStore/ContextStore';

interface NotificationProps {

}

export const Notification: FC<NotificationProps> = ({}) => {
    const context = useContext(MyContext) as ContextStoreType
    const {notifyRef} = context
    const {header, text} = useSelector((state: any) => state.notification)
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

