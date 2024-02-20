import React from 'react'
import { arr, products } from '../utils/datas'
import { NavLink } from 'react-router-dom'


function Dashboard() {
    return (
        <>
            <div>Dashboard</div>
            {arr.map((item, index) =>
                <li key={index}>
                    <NavLink to={'/cityDetail/' + item}>{item}</NavLink>
                </li>
            )}

            <h3 >Products</h3>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) =>
                        <tr key={index}>
                            <td> <NavLink to={'/productDetail/' +item.title}>{item.id}</NavLink></td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.detail}</td>
                        </tr>
                    )}
                </tbody>

            </table>


        </>

    )
}

export default Dashboard