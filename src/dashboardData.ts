import {DashboardData} from '@types';
const data: DashboardData = {
    'app': 'Головна',
    'products': 'Продукти',
    'users': 'Користувачі',
}
export const getDashboardData = (route: string | undefined): string =>
{
    if (route === undefined)
        return ''
    return data[route]
}