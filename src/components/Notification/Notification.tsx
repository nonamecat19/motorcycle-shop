import React, {FC, Ref} from 'react'
import './Notification.scss'
import {useSelector} from "react-redux";

interface NotificationProps {
    "notifyRef": Ref<any>
}

export const Notification: FC<NotificationProps> = ({notifyRef}) => {
    const notify = useSelector((state: any) => state.notify.notify)
    return(
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
                    <h3 className="text-lg font-bold">{notify.header}</h3>
                    <p className="py-4 text-sm">{notify.text}</p>
                </div>
            </div>
        </>
    )
}

