export function ProductsIndex(props) {
  return (
    <div>
    <h1> Products </h1>
    {props.products.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        <button onClick={() => props.onShowProduct(product)}>More Info</button>
      </div>
    ))}
    </div>
  );
}