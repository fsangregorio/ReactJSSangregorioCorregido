import React from "react";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navegar = useNavigate();
  return (
    <div className="card" style={{ width: "20rem", margin: ".5rem" }}>
      <img src={product.pictureUrl} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <p className="card-text"></p>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <p className="card-text">stock: {product.stock}</p>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => navegar(`/detalle/${product.id}`)}
      >
        Ver más
      </button>
    </div>
  );
};

export default Item;
