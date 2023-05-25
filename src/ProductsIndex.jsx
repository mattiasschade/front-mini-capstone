import { useState } from "react";


export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  
  return (
    <div>
    <h1> Products </h1>
    <p> Search <input type="text" value={searchFilter} onChange={(event) => {setSearchFilter(event.target.value)}} list="names" /> </p>
      <datalist id="names">
        {props.products.map(product => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      {props.products.filter(product => product.name.toLowerCase().includes(searchFilter.toLowerCase())).map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <img src={product.images[0].url} />
        <div>
         <button onClick={() => props.onShowProduct(product)}>More Info</button>
         <hr />
         <hr />
         
        </div>
      </div>
    ))}
    </div>
  );
}