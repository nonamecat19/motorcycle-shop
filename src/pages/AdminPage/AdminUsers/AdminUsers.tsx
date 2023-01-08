import React, {FC, useEffect} from 'react'
import './AdminUsers.scss'
import {useDispatch, useSelector} from "react-redux";
import {getUsersAsync} from "../../../redux/slices/usersSlicer";
import {AdminUsersComponent} from "./AdminUsersComponent/AdminUsersComponent";
import {User} from "../../../Types";

export interface AdminUsersProps {

}

export const AdminUsers: FC<AdminUsersProps> = ({}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getUsersAsync())

    }, [])

    const users = useSelector((state: any) => state.users.users)
    console.log(users)

    return (
        <div className="AdminUsers">
            <div className="overflow-x-auto m-auto h-[90vh]">
                <table className="table w-full">

                    <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Логін</th>
                        <th>Ім'я</th>
                        <th>Прізвище</th>
                        <th>Роль</th>
                        <th>Дата народження</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        users.map((user: User) => {
                            return <AdminUsersComponent key={user.id} {...user}/>
                        })
                    }


                    </tbody>

                </table>
            </div>
        </div>
    )
}

