import { Link } from "react-router-dom";
import { LogoutLink } from "./Logout";

export function Header () {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = <>
      <a href="/login">Login</a> | <a href="/signup">Signup</a>
      </>
  } else {
    authenticationLinks = <LogoutLink />
  }
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <Link to="/products/new">New Product</Link> | <Link to="/about">About</Link> | {authenticationLinks}
      </nav>
    </header>
  )
}