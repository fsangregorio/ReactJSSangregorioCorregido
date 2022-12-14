import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ productDetail }) => {
  const [contador, setContador] = useState(1);
  const [compra, setCompra] = useState(false);
  const { name, description, price, stock, img, id } = productDetail;
  const navegar = useNavigate();
  const { addItem, addItem2 } = useCart();

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={img} alt={name} style={{ width: "25rem" }} />
      <p>{description}</p>
      <p>${price}</p>
      {!compra ? (
        <ItemCount
          stock={stock}
          initial={1}
          contador={contador}
          setContador={setContador}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <button className="btn btn-warning" onClick={() => navegar("/")}>
            Seguir Comprando
          </button>
          <button className="btn btn-info" onClick={() => navegar("/cart")}>
            Ir al carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
