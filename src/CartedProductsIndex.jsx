import axios from "axios"
import { useEffect, useState } from "react"

export function CartedProductsIndex () {
  const [cartedProducts, setCartedProducts] = useState([])

  const getCartedProducts = () => {
    console.log("Something")

    axios.get("http://localhost:3000/carted_products.json").then(response => {
      console.log(response.data);
      setCartedProducts(response.data)
    })
  }

  useEffect(getCartedProducts, [])

  return (
    <div id="carted-products-index">
      <p>Hello</p>
      {cartedProducts.map(cartedProduct => (
        <div key={cartedProduct.id}>
          <p>id: {cartedProduct.id}</p>
          <p>name: {cartedProduct.name}</p>
          <p>price: {cartedProduct.price}</p>
          <p> quantity: {cartedProduct.quantity}</p>
        </div>
      ))}
    </div>
  )
}
