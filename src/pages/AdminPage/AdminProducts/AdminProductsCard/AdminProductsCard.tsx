import React, {FC, Fragment, useState} from 'react'
import {MotorcycleElement} from '../../../../Types'
import './AdminProductsCard.scss'
import {Slider} from "../../../../components/Slider/Slider";
import {EditMotoDialog} from "./EditMotoDialog/EditMotoDialog";
import {ConfirmDialog} from "../../../../components/ConfirmDialog/ConfirmDialog";

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
        variations
    } = motorcycle

    return (
        <div className="AdminProductsCard">
            <Slider variations={variations}/>
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
                    variations={variations}
                />
                <ConfirmDialog
                    buttonColorClass="bg-red-600 hover:bg-red-700"
                    callback={() => alert('delete')}
                    title="Видалити продукт?"
                    text={`Мотоцикл ${brand} ${model}`}
                />
            </div>
        </div>
    )
}

