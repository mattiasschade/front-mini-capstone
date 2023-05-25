import { Link } from "react-router-dom";
import { LogoutLink } from "./Logout";

export function Header () {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <Link to="/products/new">New Product</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
  )
}