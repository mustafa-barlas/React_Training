import React from 'react'
import { IUser } from '../models/IUser'

function UserItem(props: { item: IUser }) {



    return (
        <>
            <div >
                <div className="card" >
                    <img src={props.item.image} style={{ maxHeight: 150, maxWidth: 150 }} className="card-img-top" alt="..." />
                    <div className="card-body" style={{ height: 500 }}>
                        <h5 className="card-title">Name: {props.item.firstName} {props.item.lastName}</h5>
                        <p className="card-text">Age: {props.item.age}</p>
                        <p className="card-text">Email: {props.item.email}</p>
                        <p className="card-text">Height: {props.item.height}</p>
                        <p className="card-text">Weight: {props.item.weight}</p>
                        <p className="card-text">Phone: {props.item.phone}</p>
                        <p className="card-text">Username: {props.item.username}</p>
                        <p className="card-text">Blood Group: {props.item.bloodGroup}</p>
                        <p className="card-text">University: {props.item.university}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserItem

{/* role='button' data-toggle="modal" data-target="#exampleModalCenter"*/ }