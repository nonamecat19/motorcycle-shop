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
            "id": "lisp",
            "label": "lisp",
            "value": 132,
            "color": "hsl(147, 70%, 50%)"
        },
        {
            "id": "go",
            "label": "go",
            "value": 180,
            "color": "hsl(343, 70%, 50%)"
        },
        {
            "id": "java",
            "label": "java",
            "value": 568,
            "color": "hsl(319, 70%, 50%)"
        },
        {
            "id": "erlang",
            "label": "erlang",
            "value": 112,
            "color": "hsl(200, 70%, 50%)"
        },
        {
            "id": "sass",
            "label": "sass",
            "value": 498,
            "color": "hsl(332, 70%, 50%)"
        }
    ]


const data2 = [
    {
        "country": "Чоловіки",
        "number": 58,
    },
    {
        "country": "Жінки",
        "number": 40,
    },
    {
        "country": "Не зазначено",
        "number": 15,
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

