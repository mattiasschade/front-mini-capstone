import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"


export function ProductsShowSeparate() {
const [product, setProduct] = useState({})
const params = useParams();
const getShowProduct = () => {
  console.log(params.id);
  console.log("getting individual prodcut");
  axios.get(`http://localhost:3000/products/${params.id}.json`).then(response => {
    console.log(response.data)
    setProduct(response.data)
  })
}

useEffect(getShowProduct, [])
return (
  <div>
    <p>id: {product.id}</p>
    <p>name: {product.name}</p>
    <p>description: {product.description}</p>
    <p>price: {product.price}</p>
    <img src={product.images[0].url} />
  </div>
)

}