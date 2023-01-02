import React, { FC } from 'react'
import { MotorcycleElement } from '../../../../Types'
import './AdminProductsCard.scss'

export interface AdminProductsCardProps {
    motorcycle: MotorcycleElement
}

export const AdminProductsCard: FC<AdminProductsCardProps> = ({motorcycle}) => {
    let {id, model, brand, price, engineCapacity, enginePower, fuelConsumption, fuelCapacity, gears, mass, variations} = motorcycle
    return(
        <div className="AdminProductsCard">
            AdminProductsCard {id}
        </div>
    )
}

