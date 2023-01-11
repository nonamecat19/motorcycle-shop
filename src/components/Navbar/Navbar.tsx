import {FC} from 'react'
import './Navbar.scss'
import {useDispatch, useSelector} from "react-redux";
import {toggleAuthForm} from "../../redux/slices/authFormSlicer";
import {Link, useNavigate} from "react-router-dom";
import {logout} from '../../redux/slices/currentUserSlicer';
import {UserActions} from "../../actions/user";

export interface ContentProps {

}

const Navbar: FC<ContentProps> = ({}) => {
    const navigate = useNavigate();
    const authForm = useSelector((state: any) => state.authForm.auth)
    const dispatch = useDispatch()
    const {motorcycles, filtered, cart, fullPrice} = useSelector((state: any) => state.motorcycles)
    const {role, id} = useSelector((state: any) => state.currentUser)
    const loginHandler = () => {
        navigate('/auth')
        dispatch(toggleAuthForm())
    }
    const logoutHandler = () => {
        dispatch(logout())
        let userAction = new UserActions()
        userAction.setCookie("jwt", "", 1);
        navigate('/auth')
        dispatch(toggleAuthForm())
    }
    const profileHandler = () => {
        navigate('/profile')
    }
    const adminHandler = () => {
        navigate('/admin/app')
    }

    const dropDownCart = (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span className="badge badge-xs py-2 rounded indicator-item">{cart.length}</span>
                </div>
            </label>
            <div tabIndex={0} className="mini-window">
                <div className="card-body">
                                <span className="font-bold text-lg">
                                    {cart.length} Покупок
                                </span>
                    <span className="text-info">
                                    Всього: {fullPrice}грн
                                </span>
                    <div className="card-actions">
                        <label
                            htmlFor="my-modal-cart"
                            className="btn text-white"
                        >
                            Оформити замовлення
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
    const dropDownMenu = (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://www.marketforce.com/hubfs/Icons/kf-user-round-orange.svg"/>
                </div>
            </label>
            <ul tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a
                        className="justify-between"
                        onClick={role == '' ? loginHandler : logoutHandler}
                    >
                        {id === -1 ? 'Вхід' : 'Вихід'}
                    </a>
                </li>
                {
                    role === 'admin'
                        ? <li><label onClick={adminHandler}>Адмінпанель</label></li>
                        : null
                }
                {
                    role === ''
                        ? null
                        : <li><label htmlFor="my-modal-order">Мої замовлення</label></li>
                }
                {
                    role === ''
                        ? null
                        : <li><a className="justify-between" onClick={profileHandler}>Профіль</a></li>
                }
            </ul>
        </div>
    )

    return (
        <div className='Navbar'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">MotoShop🏍</Link>
                </div>
                <div className="flex-none">
                    {dropDownCart}
                    {dropDownMenu}
                </div>
            </div>
        </div>
    )
}
export default Navbar