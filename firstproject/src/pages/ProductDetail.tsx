import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const { data } = useParams()

  return (
    <>
    <h2>Product Detail</h2>
            <h2>{data}</h2>
    </>
  )
}

export default ProductDetail