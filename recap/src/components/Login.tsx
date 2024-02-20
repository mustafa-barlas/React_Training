import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../service';
import toast, { Toaster } from 'react-hot-toast';


function Login() {




    //const emailRef = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState('kminchelle')
    const [password, setPassword] = useState('0lelplR')
    const [errMessage, setErrMessage] = useState('')

    //0lelplR
    const navigate = useNavigate()

    const sendLogin = (evt: React.FormEvent) => {
        evt.preventDefault()
        // console.log(emailRef.current?.value)

        userLogin(username, password).then(res => {  // Http istekleri
            const dt = res.data
            if (dt) {

                // storeUser(dt)
                const stData = JSON.stringify(dt)
                localStorage.setItem('user',stData)
                toast.success('dsdcsdsdsd')
                navigate("/home", { replace: true })
            }
        }).catch(err => {
            setErrMessage('username or password are wrong')
            toast('Hello World', {
                duration: 4000,
                position: 'top-center',
              
                // Styling
                style: {
                    maxWidth: 'auto',
                    maxHeight: 'auto'
                },
                icon: '😎',
              });
            
        })
    };

    useEffect(() => {
        // const user = getUser()
        // if (user) {
        //     navigate("/home", { replace: true })
        // }
        //emailRef.current?.focus()
    }, [navigate])
    return (
        <>
            <Toaster containerStyle={{ top: '3px' }} />
            <center>
                <i className='bi bi-person-down ' ></i>

                <h2>Login</h2>
            </center>

            <form onSubmit={sendLogin}>

                <div className="my-3">

                    <input value={username} onChange={(evt) => setUsername(evt.target.value)} className="form-control" type="text" placeholder="Username" />
                </div>
                <div className="my-3">
                    <input value={password} onChange={(evt) => setPassword(evt.target.value)} className="form-control" type="password" placeholder="Password" />

                </div>
                <button className="btn btn-dark">Send</button>
            </form>
        </>
    );
}

export default Login;

function fetchData() {
    throw new Error('Function not implemented.');
}

