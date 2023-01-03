import React, {FC} from 'react'
import './AdminProducts.scss'
import {MotorcycleElement} from "../../../Types";
import {AdminProductsCard} from "./AdminProductsCard/AdminProductsCard";
import {useSelector} from "react-redux";

export interface AdminProductsProps {

}

export const AdminProducts: FC<AdminProductsProps> = ({}) => {
    const {motorcycles} = useSelector((state: any) => state.motorcycles)
    return (
        <div className="AdminProducts">
            {
                motorcycles.map((motorcycle: MotorcycleElement) => (
                    <AdminProductsCard key={motorcycle.id} motorcycle={motorcycle}/>
                ))
            }
        </div>
    )
}

