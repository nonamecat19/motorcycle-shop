import React, {FC} from 'react'
import './AdminPage.scss'
import {AdminSidebar} from "./AdminSidebar/AdminSidebar"
import {useNavigate, useParams} from "react-router-dom"
import {Helmet} from "react-helmet-async"
import {getDashboardData} from '../../dashboardData'
import {AdminUsers} from "./AdminUsers/AdminUsers"
import {AdminDashboard} from "./AdminDashboard/AdminDashboard"
import {AdminProducts} from "./AdminProducts/AdminProducts"
import {useSelector} from "react-redux";
import {IoMdClose} from "react-icons/io";

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
    let roleCurrentUser = useSelector((state: any) => state.currentUser).role
    const page: pageType = useParams<{ category: string }>().category;
    const navigate = useNavigate()
    return (
        <>
            {
                roleCurrentUser === 'user'
                    ?
                    <></>
                    :
                    <div className="AdminPage">
                        <Helmet>
                            <title>{getDashboardData(page)}</title>
                        </Helmet>
                        <AdminSidebar/>
                        <AdminContent page={page}/>
                        <div
                            className='fixed right-0 top-0 hover:scale-125 duration-300'
                            onClick={() => navigate('/')}
                        >
                            <IoMdClose size={50}/>
                        </div>
                    </div>
            }
        </>
    )
}

