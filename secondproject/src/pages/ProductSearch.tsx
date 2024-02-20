import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { searchTerm } from '../api'
import { IProduct } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet'

function ProductSearch() {


    const [searchParams] = useSearchParams()
    const [searchStatus, setSearchStatus] = useState(false)
    const [result, setResult] = useState<IProduct[]>([])
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const q = searchParams.get('q')
        if (q) {
            setQuery(q)
            searchTerm(q).then(ress => {
                const arr = ress.data.products
                setResult(arr)
                setSearchStatus(true)

            })
        }
        else {
            navigate('/home')
        }
    }, [])

    return (
        <>
            <Helmet >
                <title>Seacrh</title>
                <meta name='description' content='Something Search' />
            </Helmet>
            <h2 className='my-3'>Seacrh Results - {query} ({result.length})</h2>
            {searchStatus === true && result.length === 0 &&

                <div className='alert alert-dark text-center' role='alert'>
                    There is not anything here. You can looking for something else
                </div>
            }
            <div className='row my-3'>
                {result.map((item, index) =>
                    <ProductItem item={item} key={index} />
                )}
            </div>
        </>
    )
}

export default ProductSearch