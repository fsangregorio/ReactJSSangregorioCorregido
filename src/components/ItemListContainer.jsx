import React, {useEffect, useState} from 'react'
import {data} from './data/data'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({saludo, greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]= useState(false)
  const{categoriaId}= useParams()

useEffect(()=>{
  setLoading(true)
    data
    .then((res)=>{
      if(categoriaId){
        setProductList(res.filter((item)=> item.category === categoriaId))
      }else{
        setProductList(res)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [categoriaId])
}


export default ItemListContainer