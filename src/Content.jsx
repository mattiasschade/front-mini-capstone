import axios from "axios"
import { useState, useEffect } from "react"

import { ProductsIndex } from "./ProductsIndex"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { LogoutLink } from "./Logout"
import { Modal } from "./Modal"
import { ProductShow } from "./ProductShow"

export function Content () {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState ({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  

  return(
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <ProductsIndex products={products} onShowProduct={handleShowProduct}/>
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductShow product={currentProduct} />
      </Modal>
    </div>
  )
}