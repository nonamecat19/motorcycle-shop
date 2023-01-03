import React, {ChangeEvent, FC, Fragment, useState} from 'react'
import './EditMotoDialog.scss'
import {Dialog, Transition} from '@headlessui/react'
import {MotorcycleElement} from "../../../../../Types";

export interface EditMotoDialogProps extends MotorcycleElement {

}

type ParamElement = {
    title: string
    name: string
    type: 'text' | 'number'
}

export const EditMotoDialog: FC<EditMotoDialogProps> = (
    {
        id,
        model,
        brand,
        price,
        engineCapacity,
        enginePower,
        fuelConsumption,
        fuelCapacity,
        gears,
        mass,
        variations
    }) => {

    let handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value
        });
    }
    let handleChangeNum = (evt: ChangeEvent<HTMLInputElement>) => {
        let value: string = evt.target.value
        setState({
            ...state,
            [evt.target.name]: parseInt(value) < 0 ? "0" : value
        });
    }

    let [isOpen, setIsOpen] = useState<boolean>(false)
    const closeModal = (): void => setIsOpen(false)
    const openModal = (): void => setIsOpen(true)
    let [state, setState] = useState<MotorcycleElement>({
        id: id,
        model: model,
        brand: brand,
        price: price,
        engineCapacity: engineCapacity,
        enginePower: enginePower,
        fuelConsumption: fuelConsumption,
        fuelCapacity: fuelCapacity,
        gears: gears,
        mass: mass,
        variations: variations
    })


    return (
        <>
            <div className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="btn bg-bg hover:bg-orange-600 w-32 rounded-lg"
                >
                    Редагувати
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
                                        className="text-lg font-medium leading-6 text-gray-900 mb-4"
                                    >
                                        Редагування товару
                                    </Dialog.Title>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Бренд</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    placeholder="..."
                                                    className="motoInput"
                                                    value={state.brand}
                                                    onChange={handleChange}
                                                    name="brand"
                                                    autoComplete="off"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Модель</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    placeholder="..."
                                                    className="motoInput"
                                                    value={state.model}
                                                    onChange={handleChange}
                                                    name="model"
                                                    autoComplete="off"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ціна</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    placeholder="..."
                                                    className="motoInput"
                                                    value={state.price}
                                                    onChange={handleChangeNum}
                                                    name="price"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>К-сть кінських сил</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    placeholder="..."
                                                    className="motoInput"
                                                    value={state.enginePower}
                                                    onChange={handleChangeNum}
                                                    name="enginePower"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Затратність бензину</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    placeholder="..."
                                                    className="motoInput"
                                                    value={state.fuelConsumption}
                                                    onChange={handleChangeNum}
                                                    name="fuelConsumption"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ємкість баку</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    placeholder="..."
                                                    className="motoInput"
                                                    value={state.fuelCapacity}
                                                    onChange={handleChangeNum}
                                                    name="fuelCapacity"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>К-сть передач</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    placeholder="..."
                                                    className="motoInput"
                                                    value={state.gears}
                                                    onChange={handleChangeNum}
                                                    name="gears"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Маса</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    placeholder="..."
                                                    className="motoInput"
                                                    value={state.mass}
                                                    onChange={handleChangeNum}
                                                    name="mass"
                                                />
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-bg px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg focus-visible:ring-offset-2 duration-500"
                                            onClick={closeModal}
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
