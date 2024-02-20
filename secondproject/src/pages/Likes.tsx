import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { singleProduct } from '../api'
import { IProduct } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'

function Likes() {

    // for redux
    const arr = useSelector((item: StateType) => item.LikesReducer)
    
    const [proArr, setProArr] = useState<IProduct[]>([])
    const arrPro: IProduct[] = []

    useEffect(() => {
        
        arr.forEach((id, index) => {
            singleProduct("" + id).then(ress => {
                const dt = ress.data
                if (dt) {
                    arrPro.push(dt)
                    setTimeout(() => {
                        setProArr(arrPro)
                    }, 500);
                }
            })
        })

    }, [])

    return (
        <>
            <Helmet>
                <title>Wish list</title>
                <meta name='description' content='users likes ' />
            </Helmet>
            <h2 className='my-3'>Wish List</h2>
            <div className='row my-3'>
                {proArr.map((item, index) =>
                    <ProductItem item={item} key={index} />
                )}
            </div>
        </>

    )
}

export default Likes