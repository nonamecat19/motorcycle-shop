import React, { FC } from 'react'
import './ProfilePage.scss'
import {useSelector} from "react-redux";
import Navbar from '@c/Navbar/Navbar';

export interface ProfilePageProps {

}

export const ProfilePage: FC<ProfilePageProps> = ({}) => {
    const {id, first_name, last_name, role} = useSelector((state: any) => state.currentUser)
    return(
        <div className="ProfilePage">
            <Navbar/>
            <h1 className='pt-16'>Ім'я</h1>
            <h1>{first_name}</h1>
            <h1>Прізвище</h1>
            <h1>{last_name}</h1>
            <h1>Роль</h1>
            <h1>{role}</h1>
        </div>
    )
}

