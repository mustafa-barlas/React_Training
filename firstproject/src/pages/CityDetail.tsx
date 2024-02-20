import React from 'react'
import { useParams } from 'react-router-dom'

function CityDetail() {

    const { data } = useParams()

    return ( 
        <>  
        <h2>City Detail</h2>
            <h2>{data}</h2>
        </>
    )
}

export default CityDetail