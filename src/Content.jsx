import {ProductsIndex} from "./ProductsIndex"

export function Content () {
  const products = [
    {id: 1, name: "apple", description: "an apple a day keeps the doctor away"},
    {id: 2, name: "pineapple", description: "a prickly, but delightful, fruit."}
  ];


  return(
    <div>
      <h1>Content</h1>
      <ProductsIndex products={products}/>
    </div>
  )
}