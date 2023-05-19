export function ProductsIndex(props) {
  return (
    <div>
    <h1> Products </h1>
    {props.products.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <img src={product.images[0].url} />
        <div>
         <button onClick={() => props.onShowProduct(product)}>More Info</button>
         
        </div>
      </div>
    ))}
    </div>
  );
}