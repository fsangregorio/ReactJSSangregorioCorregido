import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function ItemCount({initial, stock, onAdd})
{
  const [contador, setContador] = useState(initial);
 
  const subir = () => {
      setContador(contador < stock ? setContador : contador + 1);
  };
 
  const bajar = () => {
      setContador(contador > initial ? setContador : contador - 1);
  };
 
  const resetear = () =>{
    setContador(1)
  }
 
  return (
    <div style={{padding: '20px', textAlign: 'center', fontSize: '20px'}}>
        <div>Cantidad:</div>
        <div>{contador}</div>
        <Button variant="danger" onClick={bajar} style={{margin: '20px', textAlign: 'center'}}>-</Button>        
        <Button variant="success" onClick={subir} style={{margin: '20px', textAlign: 'center'}}>+</Button>
        <br/>
        <br/>
        <span><Button onClick={resetear}>Reset</Button></span>
        <span><Button onClick={onAdd}>Agregar Producto</Button></span>
    </div>
  );
}