import React, {FC} from 'react'
import {User} from '../../../../Types'
import './AdminUsersComponent.scss'
import {AdminUsersDropdown} from "./AdminUsersDropdown/AdminUsersDropdown";
import {RiUser3Line, RiVipCrown2Fill, RiVipCrown2Line} from "react-icons/ri";
import {MdEdit} from "react-icons/md";

export interface AdminUsersComponentProps extends User {

}

export const AdminUsersComponent: FC<AdminUsersComponentProps> = (
    {
        id,
        login,
        firstName,
        lastName,
        role,
        dateOfBirth
    }
) => {
    const roleVariant = (): JSX.Element => {
        switch (role) {
            case 'admin': return <><RiVipCrown2Fill/>Адміністратор</>
            case 'moderator': return <><RiVipCrown2Line/>Модератор</>
            case 'user': return <><RiUser3Line/>Користувач</>
        }
    }

    return (

        <tr className="AdminUsersComponent">
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component"/>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{id}</div>
            </td>
            <td>
                <div className="font-bold">{login}</div>
            </td>
            <td>
                <div className="font-bold">{firstName}</div>
            </td>
            <td>
                <div className="font-bold">{lastName}</div>
            </td>
            <td>
                <div>
                    {roleVariant()}
                </div>
            </td>
            <td>
                <div>{dateOfBirth}</div>
            </td>
            <td>
                <AdminUsersDropdown
                    id={id}
                    login={login}
                    firstName={firstName}
                    lastName={lastName}
                    role={role}
                    dateOfBirth={dateOfBirth}
                />
            </td>
        </tr>
    )
}