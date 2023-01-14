import React, {ChangeEvent, FC, Fragment, useState} from 'react'
import './EditMotoDialog.scss'
import {Dialog, Transition} from '@headlessui/react'
import {MotorcycleElement, Variation} from "../../../../../Types";
import {MdDelete, MdOutlineAddToPhotos, MdOutlineModeEditOutline} from "react-icons/md";
import {MyButton} from "../../../../../components/MyButton/MyButton";
import {VariationColor} from "../../../../../components/VariationColor/VariationColor";
import {ConfirmDialog} from "../../../../../components/ConfirmDialog/ConfirmDialog";
import {EditVariationDialog} from "../EditVariationDialog/EditVariationDialog";
import {MotorcycleActions} from "../../../../../actions/motorcycle";
import {VariationActions} from "../../../../../actions/variation";

export interface EditMotoDialogProps {
    id: number
    model?: string
    brand?: string
    price?: number
    engineCapacity?: number
    enginePower?: number
    fuelConsumption?: number
    fuelCapacity?: number
    gears?: number
    mass?: number
    variation?: Variation[]
    buttonName?: string
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
        variation,
        buttonName
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

    const confirmAddMotoHandler = (): void => {
        let moto = new MotorcycleActions()
        if (state.id === -1) {
            moto.addMotorcycle(state)
                // .then(() => alert('Мотоцикл успішно додано'))
                .then(() => {
                    location.reload()
                })
                .catch((err) => alert('Сталася помилка: ' + err))
        } else {
            // editMotoHandler()
            moto.updateMotorcycle(state)
                // .then(() => alert('Мотоцикл успішно змінено'))
                .then(() => {
                    location.reload()
                })
                .catch((err) => alert('Сталася помилка: ' + err))
        }
    }

    const openModal = (): void => setIsOpen(true)
    let [state, setState] = useState<MotorcycleElement>({
        id: id,
        model: model ?? '',
        brand: brand ?? '',
        price: price ?? 0,
        engineCapacity: engineCapacity ?? 0,
        enginePower: enginePower ?? 0,
        fuelConsumption: fuelConsumption ?? 0,
        fuelCapacity: fuelCapacity ?? 0,
        gears: gears ?? 0,
        mass: mass ?? 0,
        variation: variation ?? []
    })

    let deleteHandler = (id: number) => {
        let variationAction = new VariationActions()
        variationAction.deleteVariation(id)
            .then(() => {
                alert('Успіх!')
                location.reload()
            })
            .catch((res) => alert('Помилка! ' + res))
    }

    return (
        <>
            <div className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="btn bg-bg hover:bg-orange-600 w-32 rounded-lg"
                >
                    {buttonName ?? 'Редагувати'}
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
                                    className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 mb-4"
                                    >
                                        Редагування товару
                                    </Dialog.Title>


                                    <div className="flex w-full">
                                        <div
                                            className="grid h-full flex-grow card rounded-box place-items-center">
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
                                                    onClick={confirmAddMotoHandler}
                                                >
                                                    Підтвердити
                                                </button>
                                            </div>
                                        </div>
                                        {id !== -1 && <div className="divider divider-horizontal"/>}
                                        <div
                                            className="grid h-full flex-grow card rounded-box place-items-center">
                                            <div className="flex flex-col w-full h-56 overflow-y-auto">
                                                {
                                                    id !== -1 &&
                                                    state.variation.map((
                                                        {
                                                            id,
                                                            colorName,
                                                            colorHex,
                                                            colorHex2,
                                                            available,
                                                            photo
                                                        }: Variation, index) => {
                                                        return (
                                                            <Fragment key={id}>
                                                                {index === 0 ? null : <div className="divider"></div>}
                                                                <div
                                                                    className="flex h-16 card rounded-box flex-nowrap flex-row items-center justify-around">

                                                                    <VariationColor
                                                                        color1={colorHex}
                                                                        color2={colorHex2}
                                                                        size={15}
                                                                    />

                                                                    <span className="w-[200px]">
                                                                        {colorName}
                                                                    </span>
                                                                    <EditVariationDialog
                                                                        callback={() => {
                                                                        }}
                                                                        id={id}
                                                                        idMotorcycle={state.id}
                                                                        colorName={colorName}
                                                                        colorHex={colorHex}
                                                                        colorHex2={colorHex2}
                                                                        available={available}
                                                                        photo={photo}
                                                                    >
                                                                        <MyButton myStyle="MyButtonHyper">
                                                                            <MdOutlineModeEditOutline
                                                                                color="#fff"
                                                                                style={{margin: "0 -7px"}}
                                                                            />
                                                                        </MyButton>
                                                                    </EditVariationDialog>


                                                                    <ConfirmDialog
                                                                        buttonColorClass={'btn w-32 rounded-lg bg-bg hover:bg-orange-700 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-bg focus-visible:ring-offset-2 duration-500'}
                                                                        callback={() => deleteHandler(id)}
                                                                        title={'Підтвердити видалення?'}
                                                                        text={'Так'}
                                                                    >
                                                                        <MyButton
                                                                            myStyle="MyButtonDanger MyButtonHyper">
                                                                            <MdDelete
                                                                                color="#fff"
                                                                                style={{margin: "0 -7px"}}
                                                                            />
                                                                        </MyButton>
                                                                    </ConfirmDialog>

                                                                </div>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </div>

                                            {
                                                id !== -1 &&

                                                <div className="mt-4">
                                                    <EditVariationDialog
                                                        callback={() => {
                                                        }}
                                                        id={-1}
                                                        idMotorcycle={state.id}
                                                        colorName={''}
                                                        colorHex={'#'}
                                                        colorHex2={'#'}
                                                        available={0}
                                                        photo={''}
                                                    >
                                                        <MyButton>
                                                            <MdOutlineAddToPhotos
                                                                color="#fff"
                                                                style={{margin: "0 7px 0 -7px"}}
                                                            />
                                                            Додати нову варіацію
                                                        </MyButton>
                                                    </EditVariationDialog>
                                                </div>
                                            }

                                        </div>
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
