import React, { useState } from 'react'

function Register() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerFnc = (evt: React.FormEvent) => {
        evt.preventDefault()
    }

    return (
        <>

            <center>
                <i  className='bi bi-person-plus' ></i>
                <h2>Register</h2>
            </center>
            <form onSubmit={registerFnc}>
                <div className="my-3">
                    <input onChange={(evt) => setFirstname(evt.target.value)} className="form-control" type="text" placeholder="Firstname" />
                </div>
                <div className="myy-3">
                    <input onChange={(evt) => setLastname(evt.target.value)} className="form-control" type="text" placeholder="Lastname" />

                </div>
                <div className="my-3">
                    <input required onChange={(evt) => setEmail(evt.target.value)} className="form-control" type="email" placeholder="E-Mail" />

                </div>
                <div className="my-3">
                    <input onChange={(evt) => setPassword(evt.target.value)} className="form-control" type="password" placeholder="password" />

                </div>
                <button className="btn btn-dark">Send</button>
            </form>

        </>
    )
}

export default Register