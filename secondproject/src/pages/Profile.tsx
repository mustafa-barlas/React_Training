/* eslint-disable jsx-a11y/alt-text */
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { getUser } from '../utils/util'
import { IUser } from '../models/IUser'


function Profile() {

    

    const firstnameRef = useRef<HTMLInputElement>(null)
    const lastnameRef = useRef<HTMLInputElement>(null)

    const [item, setItem] = useState<IUser>()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        const user = getUser()
        if (user) {
            setItem(user)
            setTimeout(() => {
                firstnameRef.current?.focus()
            }, 500)
            setTimeout(() => {
                lastnameRef.current?.focus()
            }, 500)

        }
    }, [])



    const sendForm = (evt: FormEvent) => {
        evt.preventDefault()
        if (firstName === '') {
            firstnameRef.current?.focus()
            firstnameRef.current!.style.backgroundColor = "red"
            lastnameRef.current!.style.backgroundColor = "red"
        }
        else if (lastName === '') {
            lastnameRef.current?.focus()
        } else {

        }
    }

    return (
        <>
            <Helmet>
                <title>Profile</title>
                <meta name='description' content='Profile' />
            </Helmet>


            {item &&
                <>

                    <div className="container rounded bg-white mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-3 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src={item.image} />
                                    <span className="font-weight-bold">{item.firstName}</span><span className="text-black-50">{item.email}</span><span> </span></div>
                            </div>
                            <div className="col-md-5 border-right">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text-right">Profile Settings</h4>
                                    </div>
                                    <form onSubmit={sendForm}>
                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <label className="labels">Name</label>
                                                <input ref={firstnameRef} onChange={(evt) => setFirstName(evt.target.value)} className="form-control" defaultValue={item.firstName} placeholder='firstName' />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="labels">Surname</label>
                                                <input ref={lastnameRef} onChange={(evt) => setLastName(evt.target.value)} className="form-control" defaultValue={item.lastName} placeholder='lastName' />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <label className="labels">Mobile Number</label>
                                                <input className="form-control" defaultValue={item.phone} placeholder='phone' />
                                            </div>

                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <label className="labels">Email</label>
                                                <input className="form-control" defaultValue={item.email} placeholder='emil' />
                                            </div>

                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <label className="labels">Username</label>
                                                <input className="form-control" defaultValue={item.username} placeholder='emil' />
                                            </div>

                                        </div>
                                        <button className='btn btn-success  my-3'>Send</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Profile