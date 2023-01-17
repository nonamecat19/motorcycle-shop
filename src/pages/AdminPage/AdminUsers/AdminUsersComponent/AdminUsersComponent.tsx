import React, {FC} from 'react'
import {User} from '../../../../Types'
import './AdminUsersComponent.scss'
import {RiUser3Line, RiVipCrown2Fill, RiVipCrown2Line} from "react-icons/ri";
import {MdDelete, MdEdit} from "react-icons/md";
import {useSelector} from "react-redux";
import {AiFillLock} from "react-icons/ai";
import {EditUserDialog} from "../EditUserDialog/EditUserDialog";
import {ConfirmDialog} from "../../../../components/ConfirmDialog/ConfirmDialog";
import {UserActions} from "../../../../actions/user";

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
            case 'admin':
                return <><RiVipCrown2Fill/>Адміністратор</>
            case 'moderator':
                return <><RiVipCrown2Line/>Модератор</>
            case 'user':
                return <><RiUser3Line/>Користувач</>
        }
    }

    let idCurrentUser = useSelector((state: any) => state.currentUser).id
    let roleCurrentUser = useSelector((state: any) => state.currentUser).role

    const deleteHandler = (id: number) => {
        console.log('delete', id)
        let userActions = new UserActions()
        userActions.deleteUser(id)
            .then(() => {
                alert('Користувача видалено успішно')
                location.reload()
            })
            .catch(() => alert('Помилка при видаленні користувача'))
    }


    return (

        <tr className={(idCurrentUser === id ? 'bg-bg text-bg' : '') + ' AdminUsersComponent'}>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="https://www.marketforce.com/hubfs/Icons/kf-user-round-orange.svg"
                             alt="Avatar Tailwind CSS Component"/>
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
                {
                    idCurrentUser === id
                    ||
                    (
                        role === 'admin' && roleCurrentUser === 'moderator' || role === 'moderator' && roleCurrentUser === 'moderator'
                            ?
                            <div className="">
                                <AiFillLock size={40}/>
                            </div>
                            :
                            <div className='flex w-20 justify-between'>
                                <EditUserDialog
                                    id={id}
                                    login={login}
                                    firstName={firstName}
                                    lastName={lastName}
                                    role={role}
                                    dateOfBirth={dateOfBirth}
                                    text='Редагувати користувача'
                                >
                                    <MdEdit/>
                                </EditUserDialog>
                                <ConfirmDialog
                                    buttonColorClass={''}
                                    callback={() => deleteHandler(id)}
                                    title={'Підтвердити видалення?'}
                                    text={'Id користувача: ' + id}
                                >
                                    <MdDelete className={'-ml-3'}/>
                                </ConfirmDialog>
                            </div>
                    )
                }
            </td>
        </tr>
    )
}