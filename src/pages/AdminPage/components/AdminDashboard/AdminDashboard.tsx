import React, { FC } from 'react'
import './AdminDashboard.scss'
import {DashboardCard} from "./DashboardCard/DashboardCard"
import {PieChart} from "./PieChart/PieChart"
import {LineChart} from "./LineChart/LineChart";

export interface AdminDashboardProps {

}




const data1 =
    [
        {
            "id": "Україна",
            "value": 132,
        },
        {
            "id": "Німеччина",
            "value": 180,
        },
        {
            "id": "Польща",
            "value": 568,
        },
        {
            "id": "Франція",
            "value": 112,
        },
        {
            "id": "Інші",
            "value": 498,
        }
    ]


const data2 = [
    {
        "country": "Чоловіки",
        "Кількість": 58,
    },
    {
        "country": "Жінки",
        "Кількість": 40,
    },
    {
        "country": "Не зазначено",
        "Кількість": 15,
    }
]

export const AdminDashboard: FC<AdminDashboardProps> = ({}) => {
    return(
        <div className="AdminDashboard">
            <DashboardCard title='Популярні країни'>
                <PieChart data={data1}/>
            </DashboardCard>

            <DashboardCard title='Стать користувачів'>
                <LineChart data={data2}/>
            </DashboardCard>

            <DashboardCard>
                <PieChart data={data1}/>
            </DashboardCard>

            <DashboardCard>
                <PieChart data={data1}/>
            </DashboardCard>
        </div>
    )
}

