import React, { FC } from 'react'
import './DashboardCard.scss'

export interface DashboardCardProps {
    children: React.ReactNode
    title?: string
}

export const DashboardCard: FC<DashboardCardProps> = ({children, title}) => {
    return(
        <div className="DashboardCard">
            <h1>{title}</h1>
            {children}
        </div>
    )
}

