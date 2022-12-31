import React, {FC} from 'react'
import './AdminProducts.scss'

export interface AdminProductsProps {

}

export const AdminProducts: FC<AdminProductsProps> = ({}) => {
    return (
        <div className="AdminProducts">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Логін</th>
                        <th>Ім'я</th>
                        <th>Прізвище</th>
                        <th>Роль</th>
                        <th>Дата народження</th>
                    </tr>

 
                    </thead>
                    <tbody>

                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>


                    </tbody>
                </table>
            </div>

        </div>
)
}

