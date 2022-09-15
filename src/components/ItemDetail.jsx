import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
    const {name, description, price, stock, img} = productDetail

    const onAdd = () => {
        console.log('Producto agregado con exito.')
    }
    
  return (
    <div style={{padding:'2rem', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', }}>
        <h2>{name}</h2>
        <img src={img} alt={name} style={{width:'25rem'}}/>
        <p>{description}</p>
        <p>${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail