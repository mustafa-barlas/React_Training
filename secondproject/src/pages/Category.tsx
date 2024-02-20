import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { categoryProduct } from '../api'
import ProductItem from '../components/ProductItem'
import { IProduct } from '../models/IProducts'
import { firstCharUpper } from '../utils/util'

function Category() {


    const params = useParams()
    const [title, setTitle] = useState<string>()
    const [proArr, setProArr] = useState<IProduct[]>([])
    const [titleCount, setTitleCount] = useState('8rem')

    useEffect(() => {
        const name = params.name
        if (name) {
            categoryProduct(name).then(res => {
                const dt = res.data
                if (dt) {
                    setTitle(firstCharUpper(name))
                    setProArr(dt.products)
                    const count = name.length + 1
                    setTitleCount(count + 'rem')
                }
            })
        }
    }, [])



    return (
        <>
            {title &&

                <>
                    <h2 className='text-nowrap bg-body-secondary border my-3'
                        style={{ width: titleCount }}>{title}</h2>
                    <div className='row'>
                        {proArr.map((item, index) =>
                            <ProductItem item={item} key={index} />
                        )}
                    </div>
                </>
            }
        </>
    )
}

export default Category