import React, {FC, useEffect, useState} from 'react'
import './AdminDashboard.scss'
import {DashboardCard} from "./DashboardCard/DashboardCard"
import {PieChart} from "./PieChart/PieChart"
import {LineChart} from "./LineChart/LineChart";
import {StatsActions} from "../../../actions/stat";

export interface AdminDashboardProps {

}

export const AdminDashboard: FC<AdminDashboardProps> = ({}) => {
    const [stat, setStat] = useState<any>([[], [], [], []])
    useEffect(() => {
        new StatsActions().getStats().then((res: any) => {
            setStat(res)
        })
    })
    return (
        <div className="AdminDashboard">
            <DashboardCard title='Мотоцикли'>
                <PieChart data={stat[0]}/>
            </DashboardCard>

            <DashboardCard title='Ціна мотоциклів'>
                <LineChart data={stat[1]}/>
            </DashboardCard>

            <DashboardCard title='Привілеї'>
                <PieChart data={stat[2]}/>
            </DashboardCard>

            <DashboardCard title='К-сть на складі'>
                <PieChart data={stat[3]}/>
            </DashboardCard>
        </div>
    )
}

