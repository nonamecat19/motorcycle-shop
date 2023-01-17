import React, {FC, Fragment, useState} from 'react'
import './EditUserDialog.scss'
import {Dialog, Transition} from '@headlessui/react'
import {useSelector} from "react-redux";
import {UserActions} from "../../../../actions/user";

export interface EditUserDialogProps {
    id: number
    login?: string
    firstName?: string
    lastName?: string
    role?: string
    dateOfBirth?: string
    children?: any,
    className?: string
    text: string
}

export const EditUserDialog: FC<EditUserDialogProps> = (
    {
        id,
        login,
        firstName,
        lastName,
        role,
        dateOfBirth,
        children,
        className,
        text
    }) => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const confirmModal = async () => {
        let userActions = new UserActions()
        if (state.id === -1) {
            userActions.addUser(state)
                .then(() => location.reload())
                .catch(() => alert('Помилка при додаванні користувача'))
        } else {
            userActions.updateUser(state)
                .then(() => location.reload())
                .catch((err) => alert('Помилка при оновленні користувача: ' + err))
        }


    }

    const [state, setState] = useState({
        id: id,
        login: login ?? '',
        password: '',
        firstName: firstName ?? '',
        lastName: lastName ?? '',
        role: role ?? 'user',
        dateOfBirth: dateOfBirth ?? ''
    })
    let roleCurrentUser = useSelector((state: any) => state.currentUser).role
    return (
        <>
            <div className={"flex items-center justify-center " + className}>
                <button
                    type="button"
                    onClick={openModal}
                    className={className && ''}
                >
                    {children}
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {text ?? ''}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <table>
                                            <tbody>

                                            <tr>
                                                <td>Логін</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="..."
                                                        className="motoInput"
                                                        value={state.login}
                                                        onChange={(e) => setState({
                                                            ...state, login: e.target.value
                                                        })}
                                                        name="login"
                                                        autoComplete="off"
                                                    />
                                                </td>
                                            </tr>
                                            {
                                                state.id === -1
                                                &&
                                                (
                                                    <tr>
                                                        <td>Пароль</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                placeholder="..."
                                                                className="motoInput"
                                                                value={state.password}
                                                                onChange={(e) => setState({
                                                                    ...state,
                                                                    password: e.target.value
                                                                })}
                                                                name="password"
                                                                autoComplete="off"
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            <tr>
                                                <td>Ім'я</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="..."
                                                        className="motoInput"
                                                        value={state.firstName}
                                                        onChange={(e) => setState({
                                                            ...state,
                                                            firstName: e.target.value
                                                        })}
                                                        name="login"
                                                        autoComplete="off"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Прізвище</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="..."
                                                        className="motoInput"
                                                        value={state.lastName}
                                                        onChange={(e) => setState({
                                                            ...state,
                                                            lastName: e.target.value
                                                        })}
                                                        name="login"
                                                        autoComplete="off"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Роль</td>
                                                <td>
                                                    <select
                                                        className="motoInput"
                                                        name="role"
                                                        value={state.role}
                                                        onChange={(e) => setState({
                                                            ...state, role: e.target.value
                                                        })}
                                                    >
                                                        <option selected value="user">Користувач</option>
                                                        {
                                                            roleCurrentUser === 'admin'
                                                            &&
                                                            <option value="moderator">Модератор</option>
                                                        }
                                                    </select>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>Дата народження</td>
                                                <td>
                                                    <input
                                                        type="date"
                                                        placeholder="..."
                                                        className="motoInput"
                                                        value={state.dateOfBirth}
                                                        onChange={(e) => setState({
                                                            ...state,
                                                            dateOfBirth: e.target.value
                                                        })}
                                                        name="login"
                                                        autoComplete="off"
                                                    />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>


                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-bg px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg focus-visible:ring-offset-2"
                                            onClick={confirmModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
