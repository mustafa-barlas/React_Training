import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    const sendLogin = (evt: React.FormEvent) => {
        evt.preventDefault()
        console.log(email, password)

        if (email === "ceyda@gmail.com" && password === "12345") {
            // window.location.href = "/dashboard"
            navigate("/dashboard")

        }
    };


    return (
        <>
            <div className="container ">
                <div className="row my-3">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-3"></div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-5">
                        <h2>Login</h2>
                        <form onSubmit={sendLogin}>

                            <div className="my-3">
                                <input onChange={(evt) => setEmail(evt.target.value)} className="form-control" type="email" placeholder="E-Mail" />
                            </div>
                            <div className="my-3">
                                <input onChange={(evt) => setPassword(evt.target.value)} className="form-control" type="password" placeholder="Password" />

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

