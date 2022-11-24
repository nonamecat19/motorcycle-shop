import React, {FC, Ref} from 'react'
import './Notification.scss'

interface NotificationProps {
    "header": string
    "text": string
    "notifyRef": Ref<any>
}

export const Notification: FC<NotificationProps> = ({header, text, notifyRef}) => {
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
                    <h3 className="text-lg font-bold">{header}</h3>
                    <p className="py-4 text-sm">{text}</p>
                </div>
            </div>
        </>
    )
}

