import React, { FC } from 'react'
import './ProfilePage.scss'
import {useSelector} from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import {IoMdClose} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";

export interface ProfilePageProps {

}

export const ProfilePage: FC<ProfilePageProps> = ({}) => {
    const {id, firstName, lastName, role, dateOfBirt} = useSelector((state: any) => state.currentUser)
    const navigate = useNavigate()

    return(
        <div className="ProfilePage">
            <Helmet>
                <title>Профіль</title>
            </Helmet>
            <Navbar/>
            <div
                className='fixed right-2 top-16 hover:scale-125 duration-300'
                onClick={() => navigate('/')}
            >
                <IoMdClose size={50} color={'white'}/>
            </div>

            <div
                className='flex flex-col items-center justify-center w-full h-screen'
            >
                <div className='w-60 h-60 bg-white rounded-2xl'>
                    <h1 className='pt-16'>Ім'я</h1>
                    <h1>{firstName}</h1>
                    <h1>Прізвище</h1>
                    <h1>{lastName}</h1>
                    <h1>Роль</h1>
                    <h1>{role}</h1>
                </div>
            </div>
        </div>
    )
}

