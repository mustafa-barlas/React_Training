import React from 'react'
import { getUser } from './util'
import { Navigate } from 'react-router-dom'

function LoginControl(props: { page: React.JSX.Element }) {


    const user = getUser()
    var url = "/home"
    const stUrl = localStorage.getItem('url')

    if (stUrl) {
        url = stUrl
    }

    return (
        user === null
            ?
            <>
                {props.page}
            </>

            :
            <Navigate to={url} replace={true} />


    )
}

export default LoginControl