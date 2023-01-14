import React, {FC, useEffect} from 'react'
import './AdminUsers.scss'
import {useDispatch, useSelector} from "react-redux";
import {getUsersAsync} from "../../../redux/slices/usersSlicer";
import {AdminUsersComponent} from "./AdminUsersComponent/AdminUsersComponent";
import {User} from "../../../Types";
import {EditUserDialog} from "./EditUserDialog/EditUserDialog";
import {MyButton} from "../../../components/MyButton/MyButton";

export interface AdminUsersProps {

}

export const AdminUsers: FC<AdminUsersProps> = ({}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getUsersAsync())

    }, [])

    const users = useSelector((state: any) => state.users.users)

    return (
        <div className="AdminUsers">
            <div className="overflow-x-auto m-auto h-[80vh] shadow-2xl">
                <EditUserDialog id={-1} className={'mb-5'} text='Додати користувача'>
                    <MyButton>Додати користувача</MyButton>
                </EditUserDialog>
                <table className="table w-full">

                    <thead>
                    <tr>
                        <td></td>
                        <td>ID</td>
                        <td>Логін</td>
                        <td>Ім'я</td>
                        <td>Прізвище</td>
                        <td>Роль</td>
                        <td>Дата народження</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user: User) => <AdminUsersComponent key={user.id} {...user}/>)
                    }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

