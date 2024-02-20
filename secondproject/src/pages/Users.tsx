/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../api'
import { IUser } from '../models/IUser'
import UserItem from '../components/UserItem'
import { Helmet } from 'react-helmet'

function Users() {

  const [userArr, setUserArr] = useState<IUser[]>([])
  const [item, setItem] = useState<IUser>()

  useEffect(() => {
    allUsers()
  }, [])

  const allUsers = () => {
    getAllUsers().then(ress => {
      const dt = ress.data
      if (dt) {
        setUserArr(dt.users)
      }
    })
  }


  const selectedUser = (index: number) => {
    const item = userArr[index]
    setItem(item)
  }

  const deleteUser = (id: number) => {
    console.log(id + 'deleted')
  }

  return (
    <>
      <Helmet >
        <title>Users</title>
        <meta name='description' content='E-Commerce - Users' />
      </Helmet>
      <h2 className='my-3'>Users</h2>
      <div className='row my-3'>
        {userArr.map((item, index) =>
          <div key={index} onClick={() => { selectedUser(index) }} className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" role='button' data-toggle="modal" data-target="#exampleModalCenter">
            <UserItem item={item} key={index} />
          </div>
        )}
      </div>

      <div className="modal fade" id="exampleModalCenter" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
          {item &&
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle"> {item.firstName} {item.lastName}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <center className='my-3'>
                  <img src={item.image} className='d-block' style={{ width: 130, borderWidth: 3, borderStyle: 'solid', borderColor: '#bfbfbf', borderRadius: 65 }}></img>                </center>
                <hr />
                <p>Email : {item.email}</p>
                <p>Username : {item.username}</p>
                <p>Phone : {item.phone}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button onClick={() => deleteUser(item.id)} type="button" className="btn btn-warning" data-bs-dismiss="modal">Delete</button>

              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Users