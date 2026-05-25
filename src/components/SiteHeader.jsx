import { Link, NavLink } from "react-router";

export default function SiteHeader() {
  return (
    <header className="header">
      <Link className="brand" to="/">
        <img src="../images/donellys-logo.jpg" alt="" />
      </Link>

      <nav className="nav">
        <NavLink to="/" end >Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/cart">My Cart</NavLink>
      </nav>

      <img src="../images/halal.png" alt="" />
    </header>
  );
}