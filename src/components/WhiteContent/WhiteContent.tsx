import React, { FC } from 'react'
import './WhiteContent.scss'

export interface WhiteContentProps {
    title: string
    content: string
}

export const WhiteContent: FC<WhiteContentProps> = ({title, content}) => {
    return(
        <div className="WhiteContent">
            <h3>{title}</h3>
            <span>{content}</span>
        </div>
    )
}

