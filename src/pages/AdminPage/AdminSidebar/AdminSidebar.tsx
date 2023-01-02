import React, { FC } from 'react'
import './AdminSidebar.scss'
import {AdminSidebarItem} from "./AdminSidebarItem/AdminSidebarItem"
import {ImUsers} from "react-icons/im"
import {FaMotorcycle} from "react-icons/fa"
import {MdSpaceDashboard} from "react-icons/md"
export interface AdminSidebarProps {

}

export const AdminSidebar: FC<AdminSidebarProps> = ({}) => {
    return(
        <div className="AdminSidebar">
            <AdminSidebarItem link='app' icon={<MdSpaceDashboard/>}/>
            <AdminSidebarItem link='products' icon={<FaMotorcycle/>}/>
            <AdminSidebarItem link='users' icon={<ImUsers/>}/>
        </div>
    )
}

