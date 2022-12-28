import React, {FC} from 'react'
import './AdminSidebarItem.scss'
import {Link, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getDashboardData} from '../../../../../dashboardData'
import {Dispatch} from "redux"

export interface AdminSidebarItemProps {
    link: string
    icon?: any
}

export const AdminSidebarItem: FC<AdminSidebarItemProps> = ({link, icon}) => {
    let dispatch: Dispatch = useDispatch()
    const page: string | undefined = useParams<{ category: string }>().category
    return (
        <Link
            to={'../admin/' + link}
            className={'AdminSidebarItem ' + (page === link ? 'AdminItemActive' : '')}
        >
            {icon}
            {getDashboardData(link)}
        </Link>
    )
}

