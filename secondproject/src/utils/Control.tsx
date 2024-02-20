import React from 'react'
import { getUser } from './util'
import { Navigate, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Control(props: { page: React.JSX.Element }) {


    const user = getUser()
    const location = useLocation()
    localStorage.setItem('url',location.pathname)

    return (
        user === null
            ?
            <Navigate to={'/'} replace={true} />
            :
            <>
                <NavBar user={user} />
                {props.page}
                <Footer />
            </>
    )
}

export default Control