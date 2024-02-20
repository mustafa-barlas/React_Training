import React, { useEffect, useState } from 'react'
import { categories } from '../api'
import { NavLink } from 'react-router-dom'
import { firstCharUpper } from '../utils/util'

function Categories() {

    const [arr, setArr] = useState<string[]>([])
    useEffect(() => {
        categories().then(res => {
            const dt = res.data
            if (dt) {
                setArr(dt)
            }
        })

    }, [])
    return (
        <>
            <h2 className='my-3'>Categories</h2>
            <div className='row'>
                {arr.map((item, index) =>
                    <div className=
                    'col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-2 rotate-center' key={index}>
                       <NavLink to={'/category/'+item} style={{textDecoration:'none'}}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{firstCharUpper(item)}</h5>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                )}
            </div>
        </>
    )
}

export default Categories