import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

function LoginRegister() {
    return (
        <>

        <div className='banner'></div>
            <div className="row bar">
                <div className='col-sm-6'>
                    <Login />
                </div>
                <div className='col-sm-6'>
                    <Register />
                </div>

            </div>

        </>
    )
}

export default LoginRegister