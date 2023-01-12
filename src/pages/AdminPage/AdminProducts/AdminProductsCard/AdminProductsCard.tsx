import React, {FC, Fragment, useState} from 'react'
import {MotorcycleElement} from '../../../../Types'
import './AdminProductsCard.scss'
import {Slider} from "../../../../components/Slider/Slider";
import {EditMotoDialog} from "./EditMotoDialog/EditMotoDialog";
import {ConfirmDialog} from "../../../../components/ConfirmDialog/ConfirmDialog";
import {MotorcycleActions} from "../../../../actions/motorcycle";

export interface AdminProductsCardProps {
    motorcycle: MotorcycleElement
}

export const AdminProductsCard: FC<AdminProductsCardProps> = ({motorcycle}) => {
    let {
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
        variation
    } = motorcycle

    let deleteMoto = () => {
        new MotorcycleActions().deleteMotorcycle(id)
            .then(() => {
                alert('Мотоцикл успішно видалено')
            })
            .catch(() => {
                alert('Помилка при видаленні мотоцикла')
            })
        location.reload()
    }

    return (
        <div className="AdminProductsCard">
            <Slider
                variation={variation}
                color={'#ff7100'}
            />
            <h1 className="ml-4 text-3xl font-bold">{brand}</h1>
            <h1 className="ml-4">{model}</h1>
            <div
                className="flex justify-evenly items-center mt-2"
            >
                <EditMotoDialog
                    id={id}
                    model={model}
                    brand={brand}
                    price={price}
                    engineCapacity={engineCapacity}
                    enginePower={enginePower}
                    fuelConsumption={fuelConsumption}
                    fuelCapacity={fuelCapacity}
                    gears={gears}
                    mass={mass}
                    variation={variation}
                />
                <ConfirmDialog
                    buttonColorClass="btn w-32 rounded-lg bg-red-600 hover:bg-red-700"
                    callback={() => deleteMoto()}
                    title="Видалити продукт?"
                    text={`Мотоцикл ${brand} ${model}`}
                >
                    Видалити
                </ConfirmDialog>
            </div>
        </div>
    )
}

