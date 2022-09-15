import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "./data/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(id);
  console.log(data);

  useEffect(() => {
    data
      //fetch("https://fakestoreapi.com/products/1")
      .then((res) => setProductDetail(data.find((item) => item.id === id))) // El find será sobre data, no sobre res por eso evitaba el render.
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
    console.log(productDetail);
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Por favor, espere...</p>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
