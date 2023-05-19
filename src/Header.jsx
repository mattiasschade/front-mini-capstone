import { Link } from "react-router-dom";

export function Header () {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a> | <Link to="/about">About</Link>
      </nav>
    </header>
  )
}