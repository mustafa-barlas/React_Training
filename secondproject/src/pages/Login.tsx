import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../api';
import { toast } from 'react-toastify';
import { getUser, storeUser } from '../utils/util';
import { Helmet } from 'react-helmet'

function Login() {

    const [username, setUsername] = useState('kminchelle')
    const [password, setPassword] = useState('0lelplR')

    //0lelplR
    const navigate = useNavigate()

    const sendLogin = (evt: React.FormEvent) => {
        evt.preventDefault()

        userLogin(username, password).then(res => {  // Http istekleri
            const dt = res.data
            if (dt) {
                toast.success("Login success");
                storeUser(dt)
                var url = 'home'
                const stUrl = localStorage.getItem('url')
                if (stUrl && stUrl !== '') {
                    url = stUrl
                }
                navigate(url, { replace: true })
            }
        }).catch(err => {
            toast.error("username or password are wrong")
        })
    };

    useEffect(() => {
        const user = getUser()

    }, [])
    return (

        <>
            <Helmet >
                <title>Login</title>
                <meta name='description' content='User Login'/>
            </Helmet>
            <div className="container ">
                <div className="row my-3">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3"></div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-5">
                        <h2>Login</h2>
                        <form onSubmit={sendLogin}>

                            <div className="my-3">
                                <input value={username} onChange={(evt) => setUsername(evt.target.value)} className="form-control" type="text" placeholder="Username" />
                            </div>
                            <div className="my-3">
                                <input value={password} onChange={(evt) => setPassword(evt.target.value)} className="form-control" type="password" placeholder="Password" />

                            </div>
                            <button className="btn btn-dark">Send</button>
                        </form>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3"></div>
                </div>
            </div>
        </>
    );
}

export default Login;

