import React, { useEffect, useState } from "react";
import { data } from "./data/data";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo, greeting }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();
  console.log(categoriaId);

  useEffect(() => {
    //setLoading(true)
    // data
    if (!categoriaId) {
      // Si NO hay un id de categoria, me trae todos los productos.
      data // Llamo a la api, para que efectivamente me retorne una data.
        // .then((res) => res.json()) // paso la respuesta de ese llamado a json.
        // ESTO DE ARRIBA TE IMPEDÍA EL RENDERIZADO, NO ES UNA RESPUESTA DE UNA API POR ESO NO LA PASO A JSON
        .then((json) => setProductList(json)); // Actualizo el estado
      console.log(productList); // Lo miro en consola
    } else {
      // Y sino, me trae aquellos en los que la categoría es igual a la categoriaId
      //fetch(`https://fakestoreapi.com/products`)
      data
        // .then((res) => res.json())
        .then((json) =>
          setProductList(
            json.filter((producto) => producto.category === categoriaId)
          )
        );
      console.log(productList);
    }
  }, [categoriaId]);

  // Este componente debe retornar un ItemList, que pase por props el estado actualizado de mi productList

  return <ItemList productList={productList} />;
};

export default ItemListContainer;
