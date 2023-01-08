import React, {FC} from 'react'
import {User} from '../../../../Types'
import './AdminUsersComponent.scss'
import {AdminUsersDropdown} from "./AdminUsersDropdown/AdminUsersDropdown";

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
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-sm opacity-50">United States</div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{role}</span>
            </td>
            <td>
                <span>{dateOfBirth}</span>
            </td>
            <th>
                <AdminUsersDropdown
                    id={id}
                    login={login}
                    firstName={firstName}
                    lastName={lastName}
                    role={role}
                    dateOfBirth={dateOfBirth}
                />
            </th>
        </tr>
    )
}

