/* eslint-disable jsx-a11y/anchor-is-valid */

import { useDispatch, useSelector } from 'react-redux'
import { IUser } from '../models/IUser'
import { NavLink, useNavigate } from 'react-router-dom'
import { StateType } from '../useRedux/store'
import { useEffect } from 'react'
import { LikesAction } from '../useRedux/actions/LikesAction'
import { LikesType } from '../useRedux/types/LikesType'

function NavBar(props: { user: IUser }) {


    // for redux
    const likesArr = useSelector((item: StateType) => item.LikesReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const sendItem : LikesAction = {
            type : LikesType.LIKE_ADD,
            payload : []
          }
          dispatch(sendItem)
    },[])

    const navigate = useNavigate()
    const exit = () => {

        localStorage.removeItem('user')
        navigate('/', { replace: true })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to={'/home'}> E-Commerce   </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to={'/home'}> Home <i className="bi bi-house"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/users'}> Users <i className="bi bi-people"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/categories'}> Categories <i className="bi bi-tags"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/likes'}> Wish List ({likesArr.length}) <i className="bi bi-bag-heart-fill"> </i></NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Profile <i className="bi bi-person-badge"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className='dropdown-item' to={'/profile'}>Profile <i className="bi bi-person-lines-fill"></i></NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className='dropdown-item' to={'/login'} onClick={exit}>LogOut <i className="bi bi-box-arrow-right"></i></NavLink>

                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" to={'/'}> {props.user.firstName + ' ' + props.user.lastName}</NavLink>

                            </li>
                        </ul>
                        <form action='/productSearch/' role='search' className="d-flex">
                            <input name='q' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search <i className="bi bi-search-heart"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar