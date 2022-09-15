import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {data} from './data/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const{id}=useParams()

    useEffect(()=>{
        data
        .then((res)=> setProductDetail(res.find((item)=> item.id === id)))
        .catch((e)=> console.log(e))
        .finally(()=> setLoading(false))
    },[id])
   
  return (
    <div>
       {loading ? <p>Por favor, espere...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer