import React, {FC} from 'react'
import './AdminPage.scss'
import {AdminSidebar} from "./AdminSidebar/AdminSidebar"
import {useParams} from "react-router-dom"
import {Helmet} from "react-helmet-async"
import {getDashboardData} from '@src/dashboardData'
import {AdminUsers} from "./AdminUsers/AdminUsers"
import {AdminDashboard} from "./AdminDashboard/AdminDashboard"
import {AdminProducts} from "./AdminProducts/AdminProducts"

export interface AdminPageProps {

}

type pageType = string | undefined

const AdminContent = ({page}: { page: pageType }): JSX.Element => {
    const CurrentPage = (page: pageType): JSX.Element => {
        switch (page) {
            case 'app':
                return <AdminDashboard/>
            case 'products':
                return <AdminProducts/>
            case 'users':
                return <AdminUsers/>
            default:
                return <div>404</div>
        }
    }

    return (
        <div className="AdminContent">
            {CurrentPage(page)}
        </div>
    )
}

export const AdminPage: FC<AdminPageProps> = ({}) => {
    const page: pageType = useParams<{ category: string }>().category;
    return (
        <div className="AdminPage">
            <Helmet>
                <title>{getDashboardData(page)}</title>
            </Helmet>
            <AdminSidebar/>
            <AdminContent page={page}/>
        </div>
    )
}

