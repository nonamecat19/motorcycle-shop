import React, {ChangeEvent, FC, Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from "@headlessui/react";
import './EditVariationDialog.scss'
import {Variation} from "../../../../../Types";
import {VariationActions} from "../../../../../actions/variation";
import {useDispatch} from "react-redux";
import {getMotorcyclesAsync} from "../../../../../redux/slices/motorcyclesSlicer";

export interface EditVariationDialogProps extends Variation {
    callback: () => void
    children?: any
}

export const EditVariationDialog: FC<EditVariationDialogProps> = (
    {
        callback,
        children,
        id,
        idMotorcycle,
        colorName,
        colorHex,
        colorHex2,
        available,
        photo
    }) => {

    let [isOpen, setIsOpen] = useState(false)
    const dispatch= useDispatch()
    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)
    const confirm = async () => {
        if (!selectedFile) {
            alert('Ви не обрали файл')
            return
        }else {
            const formData = new FormData()
            formData.append('file', selectedFile)
            let variationAction = new VariationActions()

            if (id === -1) {
                variationAction.addVariation(formData, state)
                    .then(() => {
                        // alert('Успіх!')
                        location.reload()
                    })
                    .catch((res) => alert('Помилка! ' + res))
            } else {
                variationAction.updateVariation(formData, state)
                    .then(() => {
                        // alert('Успіх!')
                        location.reload()
                    })
                    .catch((res) => alert('Помилка! ' + res))
            }
            callback()
            closeModal()
        }
    }
    let handleChangeNum = (evt: ChangeEvent<HTMLInputElement>) => {
        let value: string = evt.target.value
        setState({
            ...state,
            [evt.target.name]: parseInt(value) < 0 ? "0" : value
        });
    }
    let handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value
        });
    }

    let [state, setState] = useState<Variation>({
        id: id,
        idMotorcycle: idMotorcycle,
        colorName: colorName,
        colorHex: colorHex,
        colorHex2: colorHex2,
        available: available,
        photo: photo
    })

    const [selectedFile, setSelectedFile] = useState(null)
    let fileInput = useRef(null)

    let handleFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
        if (evt && evt.target && evt.target.files) {
            // @ts-ignore
            setSelectedFile(evt.target.files[0])
        }
    }

    return (
        <>
            <div className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
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
                                        Редагування варіації
                                    </Dialog.Title>

                                    <div className="mt-2">

                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Колір</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="..."
                                                        className="motoInput"
                                                        value={state.colorName}
                                                        onChange={handleChange}
                                                        name="colorName"
                                                        autoComplete="off"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Колір 1</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="..."
                                                        className="motoInput"
                                                        value={state.colorHex}
                                                        onChange={handleChange}
                                                        name="colorHex"
                                                        autoComplete="off"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Колір 2</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="..."
                                                        className="motoInput"
                                                        value={state.colorHex2}
                                                        onChange={handleChange}
                                                        name="colorHex2"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>К-сть на складі</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        placeholder="..."
                                                        className="motoInput"
                                                        value={state.available}
                                                        onChange={handleChangeNum}
                                                        name="available"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Фото</td>
                                                <td>
                                                    <div className='text-bg ml-4 w-48 break-all'>
                                                        {state.photo || 'Немає'}
                                                    </div>

                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                        <input
                                            type="file"
                                            className="file-input w-full max-w-xs border-bg rounded-md"
                                            ref={fileInput}
                                            accept={".jpg, .jpeg, .png"}
                                            onChange={handleFileChange}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="confirmButton"
                                            onClick={confirm}
                                        >
                                            Підтвердити
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