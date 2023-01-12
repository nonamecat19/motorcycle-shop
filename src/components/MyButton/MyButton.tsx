import React, { FC } from 'react'
import './MyButton.scss'

export interface MyButtonProps {
    onClick?: () => any
    children: React.ReactNode
    myStyle?: string
}

export const MyButton: FC<MyButtonProps> = ({onClick, children, myStyle}) => {
    return(
        <button
            type="button"
            className={"MyButton " + myStyle}
            onClick={onClick ? onClick : () => {}}
        >
            {children}
        </button>
    )
}

