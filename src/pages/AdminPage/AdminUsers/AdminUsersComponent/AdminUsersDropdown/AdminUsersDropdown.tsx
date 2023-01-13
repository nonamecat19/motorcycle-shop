import React, {FC} from 'react'
import './AdminUsersDropdown.scss'
import {Menu, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import {BsChevronDown} from "react-icons/bs";
import {MdDelete, MdEdit} from "react-icons/md";
import {User} from "../../../../../Types";
import {useSelector} from "react-redux";
import {EditUserDialog} from "../../EditUserDialog/EditUserDialog";
import {ConfirmDialog} from "../../../../../components/ConfirmDialog/ConfirmDialog";
import {UserActions} from "../../../../../actions/user";

export interface AdminUsersDropdownProps extends User {

}

export const AdminUsersDropdown: FC<AdminUsersDropdownProps> = (
    {
        id,
        login,
        firstName,
        lastName,
        role,
        dateOfBirth
    }) => {
    const className = (active: boolean) => `${active ? 'bg-orange-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`

    return (
        <div className=" top-16 w-30 text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                        className="rounded-md bg-bg pr-2 py-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <BsChevronDown color={"white"} style={{marginLeft: '15px'}}/>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >

                    <Menu.Items
                        className="absolute z-10 right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {
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
                                        Редагувати
                                    </EditUserDialog>
                                }
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {

                                }
                            </Menu.Item>
                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}