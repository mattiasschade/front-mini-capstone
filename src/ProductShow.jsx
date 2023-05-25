import axios from "axios";

export function ProductShow(props) {

  const handleAddToCart = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/carted_products.json").then(response => {
      console.log(response.data)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h1>Product Information</h1>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}
      </p>

      <form onSubmit={handleAddToCart}>
        <p>quantity: <input name="quantity" type="text" defaultValue={0} /></p>
        <button type="input">Add product to cart</button>
      </form>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="number" />
        </div>
        <div>
          Description <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <button type="submit">Update Product</button>
      </form>
      <button onClick={handleClick}>Delete Product</button>
    </div>
  )
}